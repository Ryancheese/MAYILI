# MAYILI / MACHINE

Official marketing site for **Mayili Clothing Trade**, rebuilt as a **React 19 + Vite 6 + TypeScript** SPA with **Framer Motion** for scroll and hero motion. Content targets U.S. performance/DTC buyers while keeping Chinese operational detail.

## Tech stack

- React 19, TypeScript, Vite 6
- Framer Motion (reduced-motion aware)
- Global CSS (design tokens, responsive grid, marquee)

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Output is written to `dist/`.

## GitHub Pages

The workflow (`.github/workflows/pages.yml`) builds with:

- `BASE_URL: /${{ github.event.repository.name }}/`

If you publish a **user/org root site** (e.g. `https://username.github.io/` with no repo path), set `BASE_URL` to `/` in the workflow (or in `vite.config.ts`).

## Hero video (optional)

Set **`VITE_HERO_VIDEO_URL`** at build time to a **muted** HTTPS MP4 loop if you want video on the hero. The site **does not** auto-load `public/media/hero.mp4` by default: a missing file often shows as a **black rectangle** on top of the background image in many browsers.

If unset, the hero uses the factory image (Ken Burns + parallax) only.

## Photos（工厂图 / GitHub 上「图片错了」必读）

网站使用的是 **Vite 的 `public/` 目录**，不是 IDE 里的 `@assets` 路径别名。代码里通过 `import.meta.env.BASE_URL + "assets/photos/…"` 引用，对应磁盘路径为：

**`public/assets/photos/*.jpg`**

必须满足两点，GitHub Pages 才会显示真实工厂图：

1. **文件必须提交到 Git**  
   当前仓库里如果只有 `.gitkeep`、没有 JPG，线上构建产物里就**没有**这些图片，浏览器请求会 **404**。`FactoryImg` 会在加载失败后改用 **Unsplash 占位图**，所以你会感觉「线上图片都是错的、本地却正常」——通常是因为 **本地有图但没 `git add` / 没 push**，或 **Linux 区分大小写** 导致文件名不一致。

2. **文件名与 `src/lib/images.ts` 完全一致**（含大小写），例如：`hero-factory.jpg`、`entrance.jpg` 等。

推送前自检（缺文件会列出清单并以退出码 1 结束）：

```bash
npm run check:photos
```

补全图片后：

```bash
git add public/assets/photos/*.jpg
git commit -m "chore: add factory photos for Pages"
git push
```

可选品类图：`public/assets/categories/{gym,running,yoga,casual}.jpg`。

## Legacy static server

`server.mjs` is a tiny static file host for emergencies only; day-to-day preview should use Vite (`npm run dev` / `npm run preview`).
