<template>
  <div class="theme-container">
    <Navbar />
    <Home v-if="$page.frontmatter.home" />
    <transition name="slideInLeft" >
      <template v-if="!$page.frontmatter.home">
        <Content :custom="false" />
      </template>
    </transition>
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
  .slideInLeft-enter-active, {
    transform: translate3d(0, 0, 0);
    visibility: visible;
    transition: all .4s ease;
  }
  .slideInLeft-enter {
    transform: translate3d(-100%, 0, 0)
  }
  .slideInLeft-leave-to, .slideInLeft-leave-active {
    opacity: 0;
  }
</style>
<style src="./styles/theme.scss" lang="scss"></style>


