<template>
  <div class="theme-container">
    <Navbar />
    <Home v-if="$page.frontmatter.home" />
      <template v-if="!$page.frontmatter.home">
        <Sidebar :list="sidebarList" />
    <transition name="slideInLeft" >
        <Content :custom="false" />
    </transition>
      </template>
  </div>
</template>
<script>
import Home from './Home'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { resolveSidebarItems } from './utils'
export default {
  components: {
    Home,
    Navbar,
    Sidebar
  },
  computed: {
    sidebarList() {
      return resolveSidebarItems(this.$site, this.$page)
    }
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
    transform: translate3d(-80%, 0, 0)
  }
  .slideInLeft-leave-to, .slideInLeft-leave-active {
    opacity: 0;
  }
</style>
<style src="./styles/theme.scss" lang="scss"></style>


