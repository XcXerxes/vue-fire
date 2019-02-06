<template>
  <div class="wrapper">
    <vf-input class="input-item" placeholder="设置前缀图标..." prefix-icon="search" v-model="value2" />
    <vf-input class="input-item" placeholder="设置后缀图标..." suffix-icon="delete" v-model="value3" />
  </div>
</template>
<script>
export default {
  data: () =>({
    value2: '',
    value3: '',
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

