<template>
  <nav class="nav-links">
    <div class="nav-item" v-for="(item, key) in userLinks">
      <NavLink :key="key" :link="item.path" :text="item.text" />
    </div>
  </nav>
</template>
<script>
import NavLink from './NavLink'
export default {
  components: {
    NavLink
  },
  computed: {
    userLinks() {
      const {nav} = this.$site.themeConfig
      return nav
    }
  }
}
</script>
<style lang="scss" scoped>
  @import './styles/_vars';
  %nav-top-border {
    color: $accentColor;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: -0;
      left: 0;
      right: 0;
      height: 2px;
      opacity: 0;
      background: $accentColor;
      transition: all .3s ease;
    }
  }
  .nav-links {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    padding-right: 2rem;
    .nav-item {
      min-width: 4.6rem;
      text-align: center;
      a{
        display:inline-flex;
        height: 4rem;
        padding: 0 1.5rem;
        line-height: 4rem;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          top: -0;
          left: 0;
          right: 0;
          height: 2px;
          opacity: 0;
          background: $accentColor;
          transition: all .3s ease;
        }
        &.router-link-active {
          @extend %nav-top-border;
          &::after{
            opacity: 1;
          }
        }
        &:hover {
          @extend %nav-top-border;
          &::after{
            opacity: 1;
          }
        }
      }
    }
  }
</style>

