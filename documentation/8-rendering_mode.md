# Rendering mode

## Default (SSR + hydration)

```
npm run build
npm run preview
```

- Explain render server side
- Explain `__NUXT_DATA__`
- Disable JS in chrome and show
- Show JS loaded

## CSR

```js
export default defineNuxtConfig({
  ssr: false,
});
```

```
npm run build
npm run preview
```

- Explain no render server side
- Show that data is fetched in XHR
- Disable JS in chrome and show nothing

## SSR without hydration

```ts
export default defineNuxtConfig({
  experimental: {
    noScripts: true,
  },
});
```

- Show that it's plain HTML without XHR

## SSG

```ts
export default defineNuxtConfig({
  routeRules: {
    // Disable homepage pre-rendered at build time
    "/": {prerender: false},
  },
})
```

- Explain static web page generated
- Serve it with http-server
- Npm run preview adapts and use a http server

```
npm run  preview
```

- Explain render instant in the page + hydration
- Explain that data comes from \_payload.json pregenerated
- Know that it is possible to target, but it is not simple


- Explain the crawler
- Disable crawler
