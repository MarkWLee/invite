import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/pages/', import.meta.url));
const prefix = '/invite/';
const port = Number(process.env.PORT || 3000);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ttf': 'font/ttf',
  '.woff2': 'font/woff2',
  '.rsc': 'text/x-component',
};

createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(
      new URL(request.url, 'http://localhost').pathname,
    );
    if (pathname === '/' || pathname === '/invite') {
      response.writeHead(302, { Location: prefix }).end();
      return;
    }
    if (
      !pathname.startsWith(prefix) ||
      !['GET', 'HEAD'].includes(request.method)
    ) {
      response.writeHead(404).end();
      return;
    }
    const relative = pathname.slice(prefix.length) || 'index.html';
    const filename = path.resolve(root, relative);
    if (!filename.startsWith(root) || !(await stat(filename)).isFile()) {
      response.writeHead(404).end();
      return;
    }
    response.writeHead(200, {
      'Content-Type':
        types[path.extname(filename)] || 'application/octet-stream',
      'Cache-Control': 'no-cache',
    });
    if (request.method === 'HEAD') response.end();
    else createReadStream(filename).pipe(response);
  } catch {
    response.writeHead(404).end();
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`GitHub Pages preview: http://localhost:${port}${prefix}`);
});
