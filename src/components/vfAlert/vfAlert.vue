<template>
  <div>{{msg}}</div>
</template>
<script>
export default {
  name: 'VfAlert',
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
}
</script>
