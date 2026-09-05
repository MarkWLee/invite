# 安安的周岁邀请函

手机左右滑动翻页，保留页角翻页和键盘操作，无底部导航栏。

## 开发与构建

需要 Node.js 22.13 或更新版本。

```sh
npm ci
npm run dev
npm run build
npm start
```

静态发布目录为 `dist/pages`，不需要服务端、ChatGPT Sites 或 Cloudflare。
构建脚本会检查邀请函 HTML 和图片、字体、脚本路径，适配 GitHub Pages 的 `/invite/` 路径。

## GitHub Pages

仓库：`MarkWLee/invite`。在仓库 Settings → Pages → Source 选择 **GitHub Actions**。
推送到 `main` 后，`.github/workflows/pages.yml` 自动构建和发布。

目标地址：https://markwlee.github.io/invite/

`.openai/hosting.json` 仅保留之前的托管记录，当前构建与发布流程不使用它。
