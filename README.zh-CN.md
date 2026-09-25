# lieflat-diagrams

中文 | [English](README.md)

`lieflat-diagrams` 是一套有 35 种图型的液态玻璃风格流程图 skill，以椰林绿为主要配色，可供 Moxt、Claude Code、Codex 及其他兼容 `SKILL.md` 的 AI agent 使用。它包括常见的流程图图型，由 HTML 生成精美动效，可交付 HTML、SVG、PNG 等多种形式。

35 个模板分成四组：

- **Essentials（决策与规划）**：决策流程、思维导图、时间线、象限、矩阵这类日常最常用的结构，覆盖条件分支、排期和方案比较。
- **Process & Analysis（流程与分析）**：泳道、服务蓝图、反馈循环、依赖关系、因果回路，用于描述带角色分工和循环反馈的过程。
- **Systems & Engineering（系统与工程）**：架构图、时序图、状态机、类图、部署图、故障树，面向软件与工程语境下的精确结构。
- **Editorial & Experimental（编辑与探索）**：弯曲分类、中心轨道、同源弧线这类不追求精确度量、但需要编辑感和呼吸感的表达型图示。

## Preview

以下是几类模板的实际预览，单张大图用来看清玻璃材质的层次，动态预览用来看入场动效，完整索引在文末的缩略图网格里。

### 材质细节

液态玻璃材质由 `backdrop-filter` 折射、渐变描边和克制的阴影叠成，缩略图会压掉这层细节，这里放几张大图。

<p align="center"><img src="preview/gallery-motion/decision-hero.gif" alt="决策流程材质细节与入场动效" width="100%"></p>
<p align="center"><strong>决策流程</strong> · Essentials</p>

<p align="center"><img src="preview/gallery-large/concept-map.png" alt="概念关系图材质细节" width="100%"></p>
<p align="center"><strong>概念关系图</strong> · Process &amp; Analysis</p>

### 动态预览

卡片进入视口时会自动播放一次入场动效：折线依次画出、色块依次浮现。HTML 里点击图表即可重播（键盘聚焦后按 Enter 或空格同样可以），符合 `prefers-reduced-motion` 时则保持静态。

<table>
  <tr>
    <td width="50%"><img src="preview/gallery-motion/gantt.gif" alt="甘特排期动态预览" width="100%"><br><p align="center"><strong>甘特排期</strong></p></td>
    <td width="50%"><img src="preview/gallery-motion/swimlane.gif" alt="跨职能泳道动态预览" width="100%"><br><p align="center"><strong>跨职能泳道</strong></p></td>
  </tr>
</table>

<table>
  <tr>
    <td width="33%"><img src="preview/gallery-motion/feedback.gif" alt="反馈循环动态预览" width="100%"><br><p align="center"><strong>反馈循环</strong></p></td>
    <td width="33%"><img src="preview/gallery-motion/mind-map.gif" alt="思维导图动态预览" width="100%"><br><p align="center"><strong>思维导图</strong></p></td>
    <td width="33%"><img src="preview/gallery-motion/free-meander.gif" alt="自由曲线动态预览" width="100%"><br><p align="center"><strong>自由曲线</strong></p></td>
  </tr>
</table>

### 完整索引

按 `catalog.md` 顺序排列的全部 35 个模板缩略图。

<table>
<tr><td align="center" width="33%"><img src="preview/gallery/decision.png" width="100%" alt="决策流程"><br><sub>决策流程</sub></td><td align="center" width="33%"><img src="preview/gallery/mind-map.png" width="100%" alt="思维导图"><br><sub>思维导图</sub></td><td align="center" width="33%"><img src="preview/gallery/folded-timeline.png" width="100%" alt="折叠时间线"><br><sub>折叠时间线</sub></td></tr>
<tr><td align="center" width="33%"><img src="preview/gallery/venn-sets.png" width="100%" alt="韦恩集合图"><br><sub>韦恩集合图</sub></td><td align="center" width="33%"><img src="preview/gallery/journey.png" width="100%" alt="用户旅程"><br><sub>用户旅程</sub></td><td align="center" width="33%"><img src="preview/gallery/gantt.png" width="100%" alt="甘特排期"><br><sub>甘特排期</sub></td></tr>
<tr><td align="center" width="33%"><img src="preview/gallery/qualitative-quadrant.png" width="100%" alt="定性象限"><br><sub>定性象限</sub></td><td align="center" width="33%"><img src="preview/gallery/decision-matrix.png" width="100%" alt="决策矩阵"><br><sub>决策矩阵</sub></td><td align="center" width="33%"><img src="preview/gallery/organization.png" width="100%" alt="组织架构"><br><sub>组织架构</sub></td></tr>
<tr><td align="center" width="33%"><img src="preview/gallery/swimlane.png" width="100%" alt="跨职能泳道"><br><sub>跨职能泳道</sub></td><td align="center" width="33%"><img src="preview/gallery/blueprint.png" width="100%" alt="服务蓝图"><br><sub>服务蓝图</sub></td><td align="center" width="33%"><img src="preview/gallery/feedback.png" width="100%" alt="反馈循环"><br><sub>反馈循环</sub></td></tr>
<tr><td align="center" width="33%"><img src="preview/gallery/annotated-cycle.png" width="100%" alt="注释循环"><br><sub>注释循环</sub></td><td align="center" width="33%"><img src="preview/gallery/dependencies.png" width="100%" alt="依赖关系"><br><sub>依赖关系</sub></td><td align="center" width="33%"><img src="preview/gallery/causal-loop.png" width="100%" alt="因果回路图"><br><sub>因果回路图</sub></td></tr>
<tr><td align="center" width="33%"><img src="preview/gallery/concept-map.png" width="100%" alt="概念关系图"><br><sub>概念关系图</sub></td><td align="center" width="33%"><img src="preview/gallery/fishbone.png" width="100%" alt="鱼骨图"><br><sub>鱼骨图</sub></td><td align="center" width="33%"><img src="preview/gallery/architecture.png" width="100%" alt="系统架构"><br><sub>系统架构</sub></td></tr>
<tr><td align="center" width="33%"><img src="preview/gallery/sequence.png" width="100%" alt="消息时序"><br><sub>消息时序</sub></td><td align="center" width="33%"><img src="preview/gallery/state-machine.png" width="100%" alt="状态机"><br><sub>状态机</sub></td><td align="center" width="33%"><img src="preview/gallery/entity-relations.png" width="100%" alt="实体关系"><br><sub>实体关系</sub></td></tr>
<tr><td align="center" width="33%"><img src="preview/gallery/use-cases.png" width="100%" alt="用例图"><br><sub>用例图</sub></td><td align="center" width="33%"><img src="preview/gallery/class-diagram.png" width="100%" alt="UML 类图"><br><sub>UML 类图</sub></td><td align="center" width="33%"><img src="preview/gallery/deployment-diagram.png" width="100%" alt="部署图"><br><sub>部署图</sub></td></tr>
<tr><td align="center" width="33%"><img src="preview/gallery/fault-tree.png" width="100%" alt="故障树"><br><sub>故障树</sub></td><td align="center" width="33%"><img src="preview/gallery/curved-classification.png" width="100%" alt="弯曲分类"><br><sub>弯曲分类</sub></td><td align="center" width="33%"><img src="preview/gallery/overlapping-circles.png" width="100%" alt="重叠圆"><br><sub>重叠圆</sub></td></tr>
<tr><td align="center" width="33%"><img src="preview/gallery/central-orbit.png" width="100%" alt="中心轨道"><br><sub>中心轨道</sub></td><td align="center" width="33%"><img src="preview/gallery/common-origin-arcs.png" width="100%" alt="同源弧线"><br><sub>同源弧线</sub></td><td align="center" width="33%"><img src="preview/gallery/tangent-circles.png" width="100%" alt="相切嵌圆"><br><sub>相切嵌圆</sub></td></tr>
<tr><td align="center" width="33%"><img src="preview/gallery/segmented-day.png" width="100%" alt="分段日程"><br><sub>分段日程</sub></td><td align="center" width="33%"><img src="preview/gallery/open-spiral.png" width="100%" alt="开放螺旋"><br><sub>开放螺旋</sub></td><td align="center" width="33%"><img src="preview/gallery/wave-annotations.png" width="100%" alt="波形注释"><br><sub>波形注释</sub></td></tr>
<tr><td align="center" width="33%"><img src="preview/gallery/wave-checkpoints.png" width="100%" alt="波形检查点"><br><sub>波形检查点</sub></td><td align="center" width="33%"><img src="preview/gallery/free-meander.png" width="100%" alt="自由曲线"><br><sub>自由曲线</sub></td><td width="33%"></td></tr>
</table>

## Templates

| 分类 | 数量 | 适合什么 |
|---|---:|---|
| **Essentials** | 9 | 决策分支、思维发散、时间线、象限比较、方案打分、组织关系 |
| **Process & Analysis** | 8 | 跨角色流程、服务前后台、反馈循环、依赖排布、因果与鱼骨分析 |
| **Systems & Engineering** | 8 | 系统架构、消息时序、状态机、实体关系、用例、类图、部署、故障树 |
| **Editorial & Experimental** | 10 | 定性连续谱、发散式主题、嵌套层级、日程分段、开放式迭代与波形叙事 |

完整的选型标准（每个模板的适用场景与不适用场景）见 `skill/catalog.md`。

## 格式说明

HTML 是完整交互和设计正本。静态格式必须在 HTML 完成并通过验证后导出。

PNG 是完整卡片的高分辨率静态截图，背景使用纸灰色。

SVG 是 diagram canvas 的静态矢量导出。它保留原 SVG 的几何、文字、defs、标题和说明，并将 HTML 玻璃 pane 转为原生 SVG 材质形状。浏览器的 backdrop-filter 与折射无法在原生 SVG 中完全等价，所以导出的 SVG 会标明 `static material approximation`。需要最高视觉一致性时，应使用 HTML 或 PNG。

用户可以请求 `html`、`svg`、`png` 或多种格式。没有指定时默认交付 HTML，并简短询问是否还需要静态图片。

## 零门槛无痛安装

一条命令装好：

```bash
npx skills add https://github.com/larashero3-dotcom/lieflat-diagrams --skill lieflat-diagrams
```

不想碰命令行的话，把这段话直接发给有 shell 权限的 Agent：

```text
帮我安装 lieflat-diagrams。请把 https://github.com/larashero3-dotcom/lieflat-diagrams
克隆到 ~/.claude/skills/lieflat-diagrams，安装完成后检查 SKILL.md、catalog.md、
templates/ 和 scripts/ 是否存在。
```

用 Codex 时把路径换成 `~/.codex/skills/lieflat-diagrams`。

装好之后直接对 Agent 说：

```text
把这个上线流程做成一张液态玻璃风格的流程图。
```

已经装过、想更新到最新版：

```text
帮我更新 lieflat-diagrams。请进入 ~/.claude/skills/lieflat-diagrams 执行 git pull，
然后告诉我当前最新 commit。
```

生成 HTML 只需要 Python 3（脚本仅用标准库）。额外导出 PNG 和 SVG 时才需要 Playwright 与 Chromium：

```bash
npm install playwright
npx playwright install chromium
```

导出脚本在本地 Chromium 中读取 HTML。为了保持模板字体一致，只允许访问 Google Fonts 并阻止其他远程地址；图示正文不会发送到外部服务。

## 生成 HTML

在项目根目录运行：

```bash
python3 skill/scripts/extract-diagram.py \
  --source skill/templates/mono-diagrams-liquid-palm-zh.html \
  --id architecture \
  --output architecture.html
```

请编辑生成副本，并保留所选卡片的实现结构。生成单图时不要修改图库。

## 导出 PNG

```bash
node skill/scripts/export-diagram.mjs \
  --input examples/decision-flow.html \
  --format png \
  --output /tmp/decision.png \
  --scale 2
```

PNG 默认倍率为 2。输出包含完整 `.card`，不包含目录和无关页面空间。

## 导出 SVG

```bash
node skill/scripts/export-diagram.mjs \
  --input examples/decision-flow.html \
  --format svg \
  --output /tmp/decision.svg
```

输出只包含图示画布。

## 示例 prompt

```text
把这些服务、数据存储和请求方向画成系统架构图。保留原文中的每个方向，没有说明的协议标为"未说明"。交付 HTML 和 PNG。
```

```text
把这个研究主题整理成思维导图。分支只表示主题关联，不暗示等级、顺序或上下级关系。交付 SVG。
```

```text
用定性象限比较这些方案。因为我没有提供评分，只使用文字描述坐标轴两端，并选择最接近的现成模板。
```

```text
这是一份跨团队的上线流程，帮我用泳道图画出来，标清楚每一步是谁负责、哪里需要交接确认。
```

```text
把这几个失败原因整理成故障树，标清楚每一层是 AND 还是 OR 组合，不要把补救措施也画进因果层级里。
```

## 验证

```bash
python3 skill/scripts/validate.py
```

## Design

35 个模板不是互相独立的图表库，而是共享同一套设计系统：统一的 Palm 配色 token、统一的液态玻璃材质、统一的线条粗细与留白节奏、统一的入场动效时序。选图型只是第一步，真正决定成品质感的是这套共享语法有没有被保留下来。

因此，`lieflat-diagrams` 和直接让模型手写一张 SVG 的差别，不只是"有没有模板"：

- 先在两份图库里核对候选卡片，再决定用哪一种结构，而不是先想好布局再临时拼一张图
- 固定的是视觉 token：配色、玻璃材质、字号、线条粗细、留白节奏、动效时序。节点数量、分支深度、画布尺寸都跟着内容走，该不对称就不对称
- 中英文图库分别核验一遍，用来发现标签长度和窄屏折行带来的布局差异
- HTML 是唯一的设计源；PNG 和 SVG 都是从验证过的 HTML 导出的派生结果，不单独维护
- 动效数据只驱动透明度和描边，不改变几何本身，因此关闭动效后的静态状态永远和最终布局一致

## 目录

```text
lieflat-diagrams/
├── README.md
├── README.zh-CN.md
├── LICENSE
├── LICENSE-ASSETS.md
├── examples/                      # 已生成的单图示例
├── preview/
│   ├── gallery/                   # 35 个中文模板缩略索引
│   ├── gallery-en/                # 35 个英文模板缩略索引
│   ├── gallery-large/             # 中文材质细节大图
│   ├── gallery-large-en/          # 英文材质细节大图
│   ├── gallery-motion/            # 6 个中文入场动效 GIF
│   └── gallery-motion-en/         # 6 个英文入场动效 GIF
└── skill/
    ├── SKILL.md
    ├── catalog.md                 # 35 个图型的数据契约索引
    ├── assets/standalone-template.html
    ├── templates/
    │   ├── mono-diagrams-liquid-palm-en.html
    │   └── mono-diagrams-liquid-palm-zh.html
    └── scripts/
        ├── export-diagram.mjs
        ├── extract-diagram.py
        └── validate.py
```

## 许可

代码、脚本和文字说明采用 [MIT License](LICENSE)。

图库、SVG 模板和视觉 assets 采用 [CC BY 4.0](LICENSE-ASSETS.md)。重新分发或修改这些 assets 时必须署名。
