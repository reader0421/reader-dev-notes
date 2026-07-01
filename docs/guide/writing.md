# 写作规范

## 文件命名

建议使用小写英文和连字符，例如：

```text
api-design.md
deployment-guide.md
vitepress-github-pages.md
```

## 文章结构

一篇技术文档建议包含：

- 背景：为什么需要这篇文档
- 结论：最终采用什么方案
- 步骤：如何操作或实现
- 验证：如何确认结果正确
- 参考：相关链接、命令或配置

## 图片资源

把图片放到 `docs/public/` 后，可以这样引用：

```md
![架构图](/architecture.png)
```

## 提交建议

每次提交尽量围绕一个主题，例如：

```bash
git add docs
git commit -m "docs: add deployment guide"
```
