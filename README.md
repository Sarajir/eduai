<div align="center">

# Same-Week Bridge

**同一周 · 课堂与家庭对齐的 SEL 试点工具**

8 周可复用话术与流程 · 可选双语家长页 · 课次日志 · 校准 & 视角实验室

[![Live site](https://img.shields.io/badge/🌐_线上站点-eduai-0d9488?style=for-the-badge&labelColor=134e4a)](https://sarajir.github.io/eduai/)
[![Source](https://img.shields.io/badge/仓库-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/Sarajir/eduai)

*界面支持 **English · 中文** · 浏览器本地运行 · 无需学生账号*

<br/>

</div>

---

| 🏫 **课堂** | 🏠 **家庭 & 迭代** |
|:--|:--|
| 每周 **25–30 分钟** 可重复结构；情境练习与 **目标句式**；**打印资料包** 直接上夹板 | **一页纸** 微练习（英 + 可选中）；**迭代日志** 仅存本机、可导出 JSON；**校准 / 视角** 可打印实验页 |

> **Scope**  
> 教学情境下的语言与流程参考。**不**提供心理咨询、诊断或危机干预 → 详见站内 **Safety & scope**。

---

## 站点地图

|  |  |
|:--|:--|
| **Home** | 总览与快速入口 |
| **Program** | 8 周大纲与周目标 |
| **Generator** | 按周生成流程表、家长页等 |
| **Log** | 课次反思（localStorage · 导出 JSON） |
| **Calibrate** | 预测 → 尝试 → 对照 |
| **Perspective** | 双视角讨论卡与桥接问题 |
| **Safety** | 边界、数据与伦理 |
| **Deploy** | 发布到 GitHub Pages 的步骤 |

---

## 本地开发

```bash
npm install
npm run dev
```

在浏览器打开终端里的地址（多为 `http://localhost:5173/`）。开发时使用站点根路径 `/`。

---

## 生产构建与预览

生产环境使用路径前缀 **`/eduai/`**（与 GitHub Project Pages 一致）。

```bash
npm run build
npm run preview
```

预览时在地址后加上 **`/eduai/`**，资源路径才与线上一致。

---

## 部署到 GitHub Pages

> **要点：** 必须发布 **`npm run build` 后的 `dist/`**。  
> 若用仓库根目录的开发版 `index.html`（引用 `/src/main.tsx`），线上会 **白屏**。

<details>
<summary><strong>方式 A · 推荐</strong> — 使用 <code>gh-pages</code> 分支</summary>

<br/>

1. 执行：

   ```bash
   npm run deploy:gh-pages
   ```

   会完成构建并把 `dist/` 推到远程分支 **`gh-pages`**。

2. 打开 **GitHub → 仓库 → Settings → Pages**  
   - **Source**：Deploy from a branch  
   - **Branch**：`gh-pages` · 文件夹 **`/ (root)`**  
   - 保存后等待约 1–3 分钟再访问 [线上站点](https://sarajir.github.io/eduai/)。

<br/>

</details>

<details>
<summary><strong>方式 B · 可选</strong> — GitHub Actions 自动部署</summary>

<br/>

将 [`hosting/deploy-pages.workflow.yml`](hosting/deploy-pages.workflow.yml) 复制为 `.github/workflows/deploy-pages.yml`，在 **Pages** 里把 **Source** 设为 **GitHub Actions**。  
若用 PAT 推送工作流，需勾选 **`workflow`** 权限；也可只在 GitHub 网页里新建该文件。

<br/>

</details>

---

## 命令速查

| 命令 | 说明 |
|:--|:--|
| `npm run dev` | 本地开发 |
| `npm run build` | 类型检查 + 构建（含 `404.html` 便于 SPA 子路由） |
| `npm run preview` | 本地预览生产包 |
| `npm run lint` | ESLint |
| `npm run deploy:gh-pages` | 构建并发布到 `gh-pages` |

---

## 目录结构（节选）

```
same-week-bridge/
├── src/
│   ├── components/    # 布局与通用 UI
│   ├── pages/         # 路由页面
│   ├── i18n/          # 中英文案与语言上下文
│   ├── lib/           # 生成器与实验室逻辑
│   └── data/          # 周次与课程数据
├── hosting/           # Pages workflow 模板（可复制到 .github/workflows/）
└── index.html         # 开发入口（勿直接当静态站根文件发布）
```

---

<div align="center">

<br/>

**[打开线上站点](https://sarajir.github.io/eduai/)** · **[查看源码](https://github.com/Sarajir/eduai)**

<br/>

*用于教育与非商业试点时，请遵守所在机构与家长沟通规范。*

</div>
