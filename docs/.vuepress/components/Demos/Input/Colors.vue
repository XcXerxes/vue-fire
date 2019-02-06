<template>
  <div class="wrapper">
    <vf-input class="input-item" placeholder="colors..." v-model="value2" />
    <vf-input class="input-item" color="danger" placeholder="colors..." v-model="value3" />
    <vf-input class="input-item" color="success" placeholder="colors..." v-model="value4" />
    <vf-input class="input-item" color="warning" placeholder="colors..." v-model="value5" />
  </div>
</template>
<script>
export default {
  data: () =>({
    value2: '',
    value3: '',
    value4: '',
    value5: '',
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
