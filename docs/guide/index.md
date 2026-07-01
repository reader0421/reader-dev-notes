# 概览

这里可以放个人知识库、开发笔记、项目复盘、部署手册和技术方案。

## 推荐目录

```text
docs/
├─ guide/          # 文档入口和长期维护内容
├─ notes/          # 日常技术笔记
├─ projects/       # 项目文档
└─ public/         # 图片、附件等静态资源
```

## 常用命令

```bash
pnpm dev
pnpm build
pnpm preview
```

## 发布流程

将内容提交并推送到 GitHub 的 `main` 分支后，GitHub Actions 会自动构建并发布到 GitHub Pages。
