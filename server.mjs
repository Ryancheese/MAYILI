import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { createServer } from "node:http";

const root = process.cwd();
const port = Number(process.env.PORT || 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".json": "application/json; charset=utf-8",
  ".mp4": "video/mp4",
};

createServer((request, response) => {
  const url = new URL(request.url || "/", `http://localhost:${port}`);
  const requestedPath = decodeURIComponent(url.pathname).replace(/^\/+/, "") || "index.html";
  const cleanPath = normalize(requestedPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = join(root, cleanPath);

  if (!filePath.startsWith(root) || !existsSync(filePath) || statSync(filePath).isDirectory()) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, { "content-type": types[extname(filePath)] || "application/octet-stream" });
  createReadStream(filePath).pipe(response);
}).listen(port, () => {
  console.log(`Static file server at http://localhost:${port}`);
  console.log("For the React site, run: npm run dev   (or npm run preview after npm run build)");
});
