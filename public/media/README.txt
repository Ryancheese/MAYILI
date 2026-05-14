Hero background video is optional. Set **`VITE_HERO_VIDEO_URL`** at build time to an HTTPS MP4 (muted, loop-friendly).  
The app does **not** auto-request `public/media/hero.mp4` anymore: browsers often paint a black `<video>` layer when the file is missing, which hides the factory photo underneath.
