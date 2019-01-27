<template>
  <div class="theme-container">
    <Navbar />
    <Home v-if="$page.frontmatter.home" />
    <template v-if="!$page.frontmatter.home">
      <Content :custom="false" />
    </template>
    
  </div>
</template>
<script>
import Home from './Home'
import Navbar from './Navbar'
export default {
  components: {
    Home,
    Navbar
  },
  mounted() {
    
  }
}
</script>
<style lang="scss" scoped>
  
</style>
<style src="./styles/theme.scss" lang="scss"></style>


