<template>
  <ul>
    <li v-for="category in categories" :key="category.slug">
      <!-- <n-link
        :to="{
          name: 'categories-slug',
          params: { slug: category.slug },
        }"
      > -->
      <n-link :to="'/shop/' + category.slug">
        <category-view :category="category"></category-view
      ></n-link>
    </li>
  </ul>
</template>
  
  <script>
export default {
  props: ["categories"],
};
</script>