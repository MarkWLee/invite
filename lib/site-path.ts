// GitHub Pages serves this project under the repository name.
export const siteBasePath = '/invite';
export const siteUrl = 'https://markwlee.github.io/invite/';

export function assetPath(path: string) {
  return `${siteBasePath}${path}`;
}
