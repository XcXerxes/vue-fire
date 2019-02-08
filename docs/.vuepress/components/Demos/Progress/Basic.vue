<template>
  <div class="wrapper">
    <vf-progress color="primary" :percent="percent1" >primary</vf-progress>
    <vf-progress color="success" :percent="percent2" >success</vf-progress>
    <vf-progress color="danger" :percent="percent3" >danger</vf-progress>
    <vf-progress color="warning" :percent="percent4" >warning</vf-progress>
    <vf-progress color="#24c1a0" :percent="percent5" >cursom</vf-progress>
  </div>
</template>
<script>
export default {
  data: () =>({
    percent1: 0,
    percent2: 0,
    percent3: 0,
    percent4: 0,
    percent5: 0
  }),
  created() {
    setTimeout(() =>{
      this.percent1 = 80
      this.percent2 = 60
      this.percent3 = 40
      this.percent4 = 95
      this.percent5 = 30
    }, 300)
  }
}
</script>
<style lang="scss" scoped>
.wrapper >div {
  margin-bottom: 15px;
}
</style>

