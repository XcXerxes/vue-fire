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
<style lang="scss" scoped>
  .vuefire-home {
    padding-top: 6rem;
    text-align: center;
  }
</style>
