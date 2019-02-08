<template>
  <div class="wrapper">
    <vf-progress :percent="50" color="primary" :indeterminate="indeterminate" >primary</vf-progress>
    <vf-button @click="toggle">toggle</vf-button>
  </div>
</template>
<script>
export default {
  data: () =>({
    indeterminate: true
  }),
  methods: {
    toggle() {
      this.indeterminate = !this.indeterminate
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper >div {
  margin-bottom: 15px;
}
</style>

