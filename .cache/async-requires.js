// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/leah/Downloads/rtg-leah/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/leah/Downloads/rtg-leah/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-cart-js": () => import("/Users/leah/Downloads/rtg-leah/src/pages/cart.js" /* webpackChunkName: "component---src-pages-cart-js" */),
  "component---src-pages-index-js": () => import("/Users/leah/Downloads/rtg-leah/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/leah/Downloads/rtg-leah/.cache/data.json")

