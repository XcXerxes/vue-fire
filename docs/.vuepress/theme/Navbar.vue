<template>
  <header class="navbar" @click="click">
    <router-link :to="$localePath" class="home-link">
      <div class="logo"></div>
    </router-link>
    <NavLinks />
  </header>
</template>
<script>
import NavLinks from './NavLinks'
export default {
  components: {
    NavLinks
  },
  methods: {
    click() {
      console.log('ccc')
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles/_vars';
.navbar{
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
}
.home-link{
  display: flex;
  width:(129/16) + rem;
  height: 2.3rem;
  .logo {
    width: inherit;
    background: url('../public/vuesax-logo-vertical.png') no-repeat center center;
    background-size: cover;
    
  }
}
</style>
