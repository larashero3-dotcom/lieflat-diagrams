#!/usr/bin/env node

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const INSTALL_MESSAGE = [
  'Playwright with Chromium is required for PNG and SVG export.',
  'Install it with:',
  '  npm install playwright',
  '  npx playwright install chromium',
].join('\n');

function fail(message, code = 1) {
  console.error(`error: ${message}`);
  process.exitCode = code;
}

function parseArgs(argv) {
  const options = { scale: 2 };
  for (let index = 0; index < argv.length; index += 1) {
    const key = argv[index];
    if (!key.startsWith('--')) throw new Error(`unexpected argument: ${key}`);
    const name = key.slice(2);
    if (!['input', 'format', 'output', 'scale'].includes(name)) {
      throw new Error(`unknown option: ${key}`);
    }
    const value = argv[index + 1];
    if (!value || value.startsWith('--')) throw new Error(`missing value for ${key}`);
    options[name] = value;
    index += 1;
  }
  if (!options.input) throw new Error('--input is required');
  if (!options.format || !['png', 'svg'].includes(options.format)) {
    throw new Error('--format must be png or svg');
  }
  if (!options.output) throw new Error('--output is required');
  options.scale = Number(options.scale);
  if (!Number.isFinite(options.scale) || options.scale <= 0 || options.scale > 8) {
    throw new Error('--scale must be a number greater than 0 and no more than 8');
  }
  return options;
}

let options;
try {
  options = parseArgs(process.argv.slice(2));
} catch (error) {
  fail(error.message, 2);
  console.error('usage: node export-diagram.mjs --input FILE --format png|svg --output FILE [--scale 2]');
  process.exit();
}

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch (error) {
  fail(INSTALL_MESSAGE, 3);
  process.exit();
}

const input = resolve(options.input);
const output = resolve(options.output);
await mkdir(dirname(output), { recursive: true });

let browser;
try {
  browser = await chromium.launch({ headless: true });
} catch (error) {
  fail(`${INSTALL_MESSAGE}\nChromium launch failed: ${error.message}`, 4);
  process.exit();
}

try {
  const context = await browser.newContext({
    viewport: { width: 1400, height: 1000 },
    deviceScaleFactor: options.format === 'png' ? options.scale : 1,
    reducedMotion: 'reduce',
  });
  const page = await context.newPage();

  // Preserve the template typography by allowing its Google Fonts requests.
  // Block every other remote host; diagram content remains inside the local page.
  await page.route(/^https?:\/\//, route => {
    const host = new URL(route.request().url()).hostname;
    if (host === 'fonts.googleapis.com' || host === 'fonts.gstatic.com') route.continue();
    else route.abort();
  });
  await page.goto(pathToFileURL(input).href, { waitUntil: 'load' });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
    await new Promise(resolveFrame => requestAnimationFrame(() => requestAnimationFrame(resolveFrame)));
  });

  const counts = await page.evaluate(() => ({
    cards: document.querySelectorAll('.card').length,
    scenes: document.querySelectorAll('.card .scene').length,
    svgs: document.querySelectorAll('.card .scene > svg').length,
  }));
  if (counts.cards !== 1) {
    throw new Error(`expected exactly one .card; found ${counts.cards}`);
  }
  if (counts.scenes !== 1) {
    throw new Error(`expected exactly one .scene inside the card; found ${counts.scenes}`);
  }
  if (counts.svgs !== 1) {
    throw new Error(`expected exactly one direct diagram SVG inside the scene; found ${counts.svgs}`);
  }

  if (options.format === 'png') {
    const card = page.locator('.card');
    await card.screenshot({ path: output, type: 'png', omitBackground: false });
  } else {
    const serialized = await page.evaluate(() => {
      const SVG_NS = 'http://www.w3.org/2000/svg';
      const scene = document.querySelector('.card .scene');
      const sourceSvg = scene.querySelector(':scope > svg');
      const glassLayer = scene.querySelector(':scope > .glass-layer');
      const sourceRect = sourceSvg.getBoundingClientRect();
      const viewBox = sourceSvg.viewBox.baseVal;
      if (!viewBox || viewBox.width <= 0 || viewBox.height <= 0 || sourceRect.width <= 0 || sourceRect.height <= 0) {
        throw new Error('diagram SVG needs a valid non-zero viewBox and rendered size');
      }

      const root = sourceSvg.cloneNode(true);
      root.setAttribute('xmlns', SVG_NS);
      root.setAttribute('width', String(viewBox.width));
      root.setAttribute('height', String(viewBox.height));
      root.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);
      root.setAttribute('data-material-rendering', 'static material approximation');

      const make = name => document.createElementNS(SVG_NS, name);
      const defs = make('defs');
      defs.setAttribute('id', 'palm-export-defs');
      defs.innerHTML = `
        <linearGradient id="palm-export-default" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFFFF" stop-opacity=".62"/><stop offset="1" stop-color="#77835A" stop-opacity=".16"/></linearGradient>
        <linearGradient id="palm-export-front" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFFFF" stop-opacity=".68"/><stop offset="1" stop-color="#ACAD79" stop-opacity=".22"/></linearGradient>
        <linearGradient id="palm-export-compute" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFFFF" stop-opacity=".58"/><stop offset="1" stop-color="#43593B" stop-opacity=".18"/></linearGradient>
        <linearGradient id="palm-export-store" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFFFF" stop-opacity=".62"/><stop offset="1" stop-color="#77835A" stop-opacity=".22"/></linearGradient>
        <linearGradient id="palm-export-gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFFFF" stop-opacity=".72"/><stop offset="1" stop-color="#F2D17E" stop-opacity=".30"/></linearGradient>
        <radialGradient id="palm-export-ambient-olive"><stop offset="0" stop-color="#ACAD79" stop-opacity=".24"/><stop offset="1" stop-color="#ACAD79" stop-opacity="0"/></radialGradient>
        <radialGradient id="palm-export-ambient-sage"><stop offset="0" stop-color="#77835A" stop-opacity=".19"/><stop offset="1" stop-color="#77835A" stop-opacity="0"/></radialGradient>
        <radialGradient id="palm-export-ambient-wheat"><stop offset="0" stop-color="#F2D17E" stop-opacity=".18"/><stop offset="1" stop-color="#F2D17E" stop-opacity="0"/></radialGradient>
        <filter id="palm-export-shadow" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#43593B" flood-opacity=".13"/></filter>`;

      const style = make('style');
      const sourceStyles = [...document.querySelectorAll('style')]
        .map(node => node.textContent)
        .join('\n');
      style.textContent = `${sourceStyles}\n
        :root{--paper:#F0EFEB;--ink:#58402E;--gray:#43593B;--muted:#77835A;--gold:#D4A017;--line-main:#77835A;--line-secondary:rgba(119,131,90,.78);--line-rule:rgba(119,131,90,.38);--line-grid:rgba(119,131,90,.18)}
        .material-pane{vector-effect:non-scaling-stroke}`;

      const metadata = make('metadata');
      metadata.setAttribute('id', 'palm-export-metadata');
      metadata.textContent = 'Palm static material approximation exported from the validated HTML source';

      const background = make('g');
      background.setAttribute('id', 'palm-export-background');
      const paper = make('rect');
      paper.setAttribute('x', String(viewBox.x));
      paper.setAttribute('y', String(viewBox.y));
      paper.setAttribute('width', String(viewBox.width));
      paper.setAttribute('height', String(viewBox.height));
      paper.setAttribute('fill', '#F0EFEB');
      background.append(paper);
      const ambientSpecs = [
        [.32, .37, .54, .84, 'palm-export-ambient-olive'],
        [.73, .66, .50, .80, 'palm-export-ambient-sage'],
        [.88, .29, .26, .60, 'palm-export-ambient-wheat'],
      ];
      for (const [cx, cy, rx, ry, fill] of ambientSpecs) {
        const ellipse = make('ellipse');
        ellipse.setAttribute('cx', String(viewBox.x + viewBox.width * cx));
        ellipse.setAttribute('cy', String(viewBox.y + viewBox.height * cy));
        ellipse.setAttribute('rx', String(viewBox.width * rx / 2));
        ellipse.setAttribute('ry', String(viewBox.height * ry / 2));
        ellipse.setAttribute('fill', `url(#${fill})`);
        background.append(ellipse);
      }

      const material = make('g');
      material.setAttribute('id', 'palm-export-material');
      material.setAttribute('aria-label', 'Palm static material approximation');
      const scaleX = viewBox.width / sourceRect.width;
      const scaleY = viewBox.height / sourceRect.height;
      const panes = glassLayer ? [...glassLayer.querySelectorAll(':scope > .pane')] : [];
      for (const pane of panes) {
        const rect = pane.getBoundingClientRect();
        const computed = getComputedStyle(pane);
        const x = viewBox.x + (rect.left - sourceRect.left) * scaleX;
        const y = viewBox.y + (rect.top - sourceRect.top) * scaleY;
        const width = rect.width * scaleX;
        const height = rect.height * scaleY;
        const radiusPx = Number.parseFloat(computed.borderTopLeftRadius) || 0;
        const radius = Math.min(radiusPx * Math.min(scaleX, scaleY), width / 2, height / 2);
        const circular = pane.classList.contains('round') || pane.classList.contains('contour-glass') ||
          radiusPx >= Math.min(rect.width, rect.height) * 0.45;
        const shape = make(circular ? 'ellipse' : 'rect');
        if (circular) {
          shape.setAttribute('cx', String(x + width / 2));
          shape.setAttribute('cy', String(y + height / 2));
          shape.setAttribute('rx', String(width / 2));
          shape.setAttribute('ry', String(height / 2));
        } else {
          shape.setAttribute('x', String(x));
          shape.setAttribute('y', String(y));
          shape.setAttribute('width', String(width));
          shape.setAttribute('height', String(height));
          shape.setAttribute('rx', String(radius));
          shape.setAttribute('ry', String(radius));
        }
        let token = 'default';
        if (pane.classList.contains('gold')) token = 'gold';
        else if (pane.classList.contains('compute')) token = 'compute';
        else if (pane.classList.contains('store')) token = 'store';
        else if (pane.classList.contains('front') || pane.classList.contains('annotation')) token = 'front';
        shape.setAttribute('fill', `url(#palm-export-${token})`);
        shape.setAttribute('stroke', token === 'gold' ? '#D4A017' : token === 'compute' ? '#43593B' : '#FFFFFF');
        shape.setAttribute('stroke-opacity', token === 'gold' ? '.42' : token === 'compute' ? '.28' : '.78');
        shape.setAttribute('stroke-width', String(1.1 * Math.min(scaleX, scaleY)));
        shape.setAttribute('filter', 'url(#palm-export-shadow)');
        shape.setAttribute('class', `material-pane material-${token}`);
        const role = pane.getAttribute('data-material-role');
        if (role) shape.setAttribute('data-material-role', role);
        material.append(shape);
      }

      const protectedNames = new Set(['title', 'desc', 'metadata', 'defs', 'style']);
      const insertionPoint = [...root.children].find(child => !protectedNames.has(child.localName)) || null;
      root.insertBefore(metadata, insertionPoint);
      root.insertBefore(defs, insertionPoint);
      root.insertBefore(style, insertionPoint);
      root.insertBefore(background, insertionPoint);
      root.insertBefore(material, insertionPoint);

      return `<?xml version="1.0" encoding="UTF-8"?>\n${new XMLSerializer().serializeToString(root)}\n`;
    });
    await writeFile(output, serialized, 'utf8');
  }

  await context.close();
  console.log(`exported ${options.format.toUpperCase()} to ${output}`);
} catch (error) {
  fail(error.message, 5);
} finally {
  await browser.close();
}
