# Same-Week Bridge

面向教育者的 **SEL 试点工具包**：8 周课堂话术与流程、可选双语家长一页纸、课次迭代日志，以及两个可打印的「学习科学」小实验（**校准**与**双视角**）。界面支持 **English / 中文** 切换。

**线上预览：** [https://sarajir.github.io/eduai/](https://sarajir.github.io/eduai/)

> 本工具提供教学情境下的语言与流程参考，**不**提供心理咨询、诊断或危机干预。详见站内 *Safety & scope*。

---

## 功能一览

| 区域 | 说明 |
|------|------|
| **Home** | 项目介绍与入口 |
| **Program** | 8 周大纲与每周目标 |
| **Generator** | 按周生成可打印资料（流程表、家长页等） |
| **Log** | 课次反思记录（仅存本机浏览器，可导出 JSON） |
| **Calibrate** | 校准实验室：预测 → 尝试 → 对照的微流程 |
| **Perspective** | 视角实验室：双角色讨论卡与桥接问题 |
| **Safety** | 安全边界、数据与使用范围 |
| **Deploy** | 如何把站点发布到 GitHub Pages |

---

## 技术栈

- [React](https://react.dev/) 19 · [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) 8 · [Tailwind CSS](https://tailwindcss.com/) 4
- [React Router](https://reactrouter.com/)（浏览器路由）

生产构建使用 `base: /eduai/`，以匹配 GitHub Project Pages 路径 `https://<user>.github.io/eduai/`。

---

## 本地开发

```bash
npm install
npm run dev
```

浏览器打开终端提示的地址（一般为 `http://localhost:5173/`）。开发时使用站点根路径 `/`。

---

## 构建与本地预览（含 `/eduai/` 前缀）

```bash
npm run build
npm run preview
```

预览时请在地址后访问 **`/eduai/`**，以接近线上资源路径。

---

## 发布到 GitHub Pages

站点必须是 **Vite 构建后的 `dist/`**，不能直接把仓库根目录的 `index.html`（含 `/src/main.tsx`）当作静态站发布，否则线上会白屏。

### 方式 A：从 `gh-pages` 分支发布（当前推荐）

1. 在本机执行：

   ```bash
   npm run deploy:gh-pages
   ```

   该命令会 `npm run build`，并把 `dist/` 推送到远程分支 **`gh-pages`**。

2. 在 GitHub 仓库：**Settings → Pages**  
   - **Source**：*Deploy from a branch*  
   - **Branch**：`gh-pages`，文件夹 **`/ (root)`**  
   - 保存后等待 1–3 分钟再访问线上地址。

### 方式 B：GitHub Actions（可选）

若希望每次 push `main` 自动构建部署，可将 `hosting/deploy-pages.workflow.yml` 复制为 `.github/workflows/deploy-pages.yml`，并把 Pages 的 **Source** 设为 **GitHub Actions**。使用 PAT 推送工作流文件时，需勾选 **`workflow`** 权限；否则可在 GitHub 网页上手动创建该文件。

---

## 常用命令

| 命令 | 作用 |
|------|------|
| `npm run dev` | 本地开发 |
| `npm run build` | 类型检查 + 生产构建，并生成 `dist/404.html` 以利于 SPA 子路由 |
| `npm run preview` | 本地预览生产构建 |
| `npm run lint` | ESLint |
| `npm run deploy:gh-pages` | 构建并发布到 `gh-pages` 分支 |

---

## 目录结构（节选）

```
src/
  components/     # 布局与通用 UI
  pages/          # 各路由页面
  i18n/           # 中英文案与语言上下文
  lib/            # 生成器与实验室逻辑
  data/           # 周次与课程数据
hosting/          # Pages 部署用 workflow 模板（供复制到 .github/workflows/）
```

---

## 仓库

源码：[https://github.com/Sarajir/eduai](https://github.com/Sarajir/eduai)

---

## 许可

若未另行声明，以仓库内许可证文件为准；用于教育与非商业试点时请遵守所在机构与家长沟通规范。
