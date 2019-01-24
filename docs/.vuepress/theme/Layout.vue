<template>
  <div class="theme-container">
    <Home v-if="$page.frontmatter.home" />
    <template v-if="!$page.frontmatter.home">
      <Content :custom="false" />
    </template>
  </div>
</template>
<script>
import Home from './Home'
export default {
  components: {
    Home
  },
  mounted() {
    debugger
  }
}
</script>

