<template>
  <div class="wrapper">
    <vf-avatar text="l" class="item" size="small" />
    <vf-avatar text="leo" class="item" />
    <vf-avatar src="https://placeimg.com/320/320/people" class="item" size="large" />
    <vf-avatar src="https://placeimg.com/320/320/people" class="item" :style="{width: '70px', height: '70px'}" />
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .wrapper {
    .item {
      margin: 5px;
    }
  }
</style>
