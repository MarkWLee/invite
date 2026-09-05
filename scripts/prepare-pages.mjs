import assert from 'node:assert/strict';
import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const client = path.join(root, 'dist/client');
const output = path.join(root, 'dist/pages');
const basePath = '/invite';

// Fail before publishing if Vinext silently skips the invitation's static route.
const html = await readFile(path.join(client, 'index.html'), 'utf8');
assert(html.includes('安安一周岁生日宴'), 'Invitation HTML was not exported');
assert(
  !html.includes('book-controls'),
  'The bottom navigation must stay removed',
);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const entry of await readdir(client, { withFileTypes: true })) {
  if (entry.name === 'invite' || entry.name === '.vite') continue;
  await cp(path.join(client, entry.name), path.join(output, entry.name), {
    recursive: true,
  });
}
// GitHub already mounts the artifact at /invite, so don't nest that directory.
await cp(path.join(client, 'invite/_next'), path.join(output, '_next'), {
  recursive: true,
});

async function filesIn(directory) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...(await filesIn(filename)));
    else result.push(filename);
  }
  return result;
}

const files = await filesIn(output);
for (const filename of files.filter((name) => name.endsWith('.css'))) {
  const css = await readFile(filename, 'utf8');
  // Vinext beta prefixes public CSS URLs as if they were compiled assets.
  // Restore the public font/frame paths in the generated artifact only.
  await writeFile(
    filename,
    css.replaceAll(/\/invite\/_next\/static\/(fonts|frames)\//g, '/invite/$1/'),
  );
}

const publishedPaths = new Set(
  files.map(
    (filename) =>
      `${basePath}/${path.relative(output, filename).split(path.sep).join('/')}`,
  ),
);
let checked = 0;
for (const filename of files.filter((name) => /\.(html|css)$/.test(name))) {
  const text = await readFile(filename, 'utf8');
  for (const match of text.matchAll(/\/invite\/[^\s"'<>);\\]+/g)) {
    const url = match[0].split(/[?#]/)[0];
    if (!path.posix.extname(url)) continue;
    assert(publishedPaths.has(url), `Missing published asset: ${url}`);
    checked++;
  }
}
assert(publishedPaths.has('/invite/.nojekyll'));
console.log(
  `GitHub Pages artifact ready: dist/pages (${checked} asset references checked).`,
);
