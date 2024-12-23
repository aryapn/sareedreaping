
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://aryapn.github.io/sareedreaping/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://aryapn.github.io/sareedreaping"
  }
],
  assets: {
    'index.csr.html': {size: 541, hash: '6f8f82125371b32617878aaed41de1c4b2446a8119c84952eca1da5ad838abea', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1054, hash: 'afbab59979a58a2caa856903ca4c7b9ecdf5e27d7ddbd350c44c54053adbae74', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 675, hash: 'a3995886cde47f6a0c1d8e2af5ef98420e26a60cf474eaa0af4aa76480111faf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
