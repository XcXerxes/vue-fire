<template>
  <div class="wrapper">
    <vf-progress color="primary" :percent="percent" >primary</vf-progress>
    <vf-progress :height="10" color="success" :percent="percent" >10</vf-progress>
    <vf-progress :height="15" color="danger" :percent="percent" >20</vf-progress>
  </div>
</template>
<script>
export default {
  data: () =>({
    percent: 0
  }),
  created() {
    setTimeout(() =>{
      this.percent = 80
    }, 300)
  }
}
</script>
<style lang="scss" scoped>
.wrapper >div {
  margin-bottom: 15px;
}
</style>

