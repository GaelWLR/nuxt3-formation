# SEO & Meta

- Quick intro on the fact that there is no meta currently (see the beautiful title)

```ts
const {t} = useI18n();

useHead({
  title: t("homepage.title"),
});

useSeoMeta({
  title: t("homepage.title"),
  ogTitle: t("homepage.title"),
  description: t("homepage.description"),
  ogDescription: t("homepage.description"),
  ogImage: "https://example.com/og-image.jpg",
  twitterCard: "summary_large_image",
});
```

- Show the result in HTML
- Point out that in programmatic navigation if the next page don't have title it stay the same
- Doc for i18n meta: https://i18n.nuxtjs.org/docs/guide/seo
