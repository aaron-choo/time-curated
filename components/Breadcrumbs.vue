<template>
  <Bounded as="section" yPadding="xs" class="breadcrumb-container">
    <ol
      vocab="http://schema.org/"
      typeof="BreadcrumbList"
      class="font-sans text-xs font-medium capitalize"
    >
      <li
        v-if="$store.state.prismic.settings.lang === 'en-us'"
        property="itemListElement"
        typeof="ListItem"
      >
        <NLink property="item" typeof="WebPage" to="/">
          <span property="name">Home</span>
        </NLink>
        <meta property="position" content="1" />
      </li>
      <li
        v-if="$store.state.prismic.settings.lang === 'zh-cn'"
        property="itemListElement"
        typeof="ListItem"
      >
        <NLink property="item" typeof="WebPage" to="/zh-cn/">
          <span property="name">官网</span>
        </NLink>
        <meta property="position" content="1" />
      </li>
      <li
        v-for="(crumb, index) in crumbs"
        :key="index"
        property="itemListElement"
        typeof="ListItem"
      >
        <NLink property="item" typeof="WebPage" :to="crumb.path">
          <span property="name">{{
            $route.fullPath === crumb.path && title !== null
              ? title
              : crumb.title
          }}</span>
        </NLink>
        <meta property="position" :content="index + 2" />
      </li>
    </ol>
  </Bounded>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath;
      const params = fullPath.startsWith("/")
        ? fullPath.substring(1).split("/")
        : fullPath.split("/");
      // console.log(params);
      const crumbs = [];
      let path = "";
      params.forEach((param, index) => {
        path = `${path}/${param}`;
        const match = this.$router.match(path);
        const lang = this.$store.state.prismic.settings.lang;
        if (match.name !== null && param.length > 1) {
          if (index === params.length - 1) {
            crumbs.push({
              title: this.$store.state.prismic.page.data.title,
              ...match,
            });
          } else {
            switch (param) {
              case "shop":
                crumbs.push({
                  title: lang === "zh-cn" ? "商店" : param,
                  ...match,
                });
                break;
              case "straps":
                crumbs.push({
                  title: lang === "zh-cn" ? "皮革表带" : "watch " + param,
                  ...match,
                });
                break;
              case "bracelets":
                crumbs.push({
                  title: lang === "zh-cn" ? "不锈钢表带" : "watch " + param,
                  ...match,
                });
                break;
              case "buckles":
                crumbs.push({
                  title: lang === "zh-cn" ? "不锈钢表扣" : "watch " + param,
                  ...match,
                });
                break;
              case "strap finder":
                crumbs.push({
                  title: lang === "zh-cn" ? "表带配色" : "watch " + param,
                  ...match,
                });
                break;
              case "collection":
                crumbs.push({
                  title: lang === "zh-cn" ? "收藏参考" : param,
                  ...match,
                });
                break;
              case "articles":
                crumbs.push({
                  title: lang === "zh-cn" ? "资讯" : param,
                  ...match,
                });
                break;
              case "people-watching":
                crumbs.push({
                  title:
                    lang === "zh-cn" ? "出人意表" : param.replace(/-/g, " "),
                  ...match,
                });
              case "deep-dive":
                crumbs.push({
                  title:
                    lang === "zh-cn" ? "深入研究" : param.replace(/-/g, " "),
                  ...match,
                });
                break;
            }
          }
        }
      });
      return crumbs;
    },
  },
};
</script>

<style scoped>
.breadcrumbs-container {
  color: var(--color);
}
ol {
  list-style: none;
}
li {
  display: inline;
}
li:after {
  content: " • ";
  display: inline;
  padding: 0 0.25em;
  opacity: 0.3;
}
li:last-child:after {
  content: "";
}

li a {
  opacity: 0.5;
}
li a.nuxt-link-exact-active.nuxt-link-active {
  opacity: 1;
}
</style>