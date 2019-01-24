<template>
  <div class="vuefire-home">
    <div class="logo-g">
      <img :src="$withBase(data.heroImage)" />
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    data() {
      return this.$page.frontmatter
    }
  }
}
</script>
