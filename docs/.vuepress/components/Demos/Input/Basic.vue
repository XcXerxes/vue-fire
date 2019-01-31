<template>
  <div class="wrapper">
    <vf-input class="input-item" placeholder="Basic use" />
    <vf-input class="input-item"  placeholder="请输入..." v-model="value1" />
    <vf-input class="input-item"  placeholder="请输入..." disabled />
  </div>
</template>
<script>
export default {
  data: () =>({
    value1: ''
  })
}
</script>
<style lang="scss" scoped>
.wrapper {
  .input-item {
    margin-bottom: 15px;
  }
}
</style>

