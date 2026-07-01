# Reader Dev Notes

这是 Reader 的个人开发经验文档站，基于 VitePress 和 GitHub Pages 构建，用于沉淀前端、PHP、运维和工程实践。

## 本地开发

```bash
pnpm install
pnpm dev
```

## 构建检查

```bash
pnpm build
```

## 发布到 GitHub Pages

1. 将仓库推送到 GitHub。
2. 打开仓库的 `Settings -> Pages`。
3. 在 `Build and deployment` 中选择 `GitHub Actions`。
4. 推送到 `main` 分支后，`.github/workflows/deploy.yml` 会自动构建并发布站点。

普通项目仓库会自动使用 `/<repo>/` 作为站点基础路径；如果仓库名是 `<username>.github.io`，则使用根路径 `/`。
