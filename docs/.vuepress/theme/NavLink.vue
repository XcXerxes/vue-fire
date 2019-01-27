<template>
  <router-link
    :to="link"
    :exact="link=== '/'"
    v-if="true"
    class="nav-link"
  >{{text}}</router-link>
  <a v-else :href="link" class="nav-link" target="_blank" >
    {{text}}
  </a>
</template>
<script>
export default {
  props: {
    link: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

