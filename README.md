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

The workflow builds with **`BASE_URL: ./`** so asset URLs stay **relative** to the deployed path (works for `https://<user>.github.io/<repo>/` without depending on exact repo-name casing).

If you ever need an **absolute** base path instead, set `BASE_URL` in the workflow (e.g. `/<repository>/`) and `vite.config.ts` to match.

## Hero video (optional)

Set **`VITE_HERO_VIDEO_URL`** at build time to a **muted** HTTPS MP4 loop if you want video on the hero. The site **does not** auto-load `public/media/hero.mp4` by default: a missing file often shows as a **black rectangle** on top of the background image in many browsers.

If unset, the hero uses the factory image (Ken Burns + parallax) only.

## Photos（工厂图 — 已改为随构建打包）

图片放在 **`src/assets/photos/`** 与 **`src/assets/categories/`**（在 Cursor 里可写 **`@assets/photos/…`**，已配置路径别名）。在 `src/lib/images.ts` 里用 **`import … from '@assets/…?url'`** 引入。

刷新占位图（需已安装 **curl** 且可访问外网）：

```bash
npm run photos:fetch
```

Vite 会：

- 把文件输出到 **`dist/assets/`**（带内容哈希的文件名），
- 在 JS 里写入 **相对路径**（配合 `base: './'`，适配 GitHub Pages 子路径）。

这样 **不再依赖** `public/assets/photos/` 是否单独提交到 GitHub；只要源码里的 JPEG 在仓库里，线上就会和本地一致。

推送前检查：

```bash
npm run check:photos
```

用你自己的工厂照 **覆盖** `src/assets/photos/*.jpg`（保持文件名不变），再 `git add`、`commit`、`push` 即可。品类图：`src/assets/categories/{gym,running,yoga,casual}.jpg`。

`public/assets/photos/` 仅作遗留说明时可忽略；首屏视频等仍可用 `public/media/`。

## Legacy static server

`server.mjs` is a tiny static file host for emergencies only; day-to-day preview should use Vite (`npm run dev` / `npm run preview`).
