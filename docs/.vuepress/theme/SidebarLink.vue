<template>
  <router-link :to="item.path" >{{item.title}}</router-link>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

