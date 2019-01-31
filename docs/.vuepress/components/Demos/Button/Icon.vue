<template>
  <div class="wrapper">
    <vf-button icon="home">主页</vf-button>
    <vf-button type="warning" icon="star" icon-position="suffix">Star</vf-button>
    <vf-button>
      <vf-icon slot="prefix" icon="search" :style="{marginRight: '3px'}" />
      搜索
    </vf-button>
     <vf-button icon="delete" type="danger" mode="border"  >
      删除
    </vf-button>
     <vf-button icon="info" mode="border" disabled  >
      Disabled
    </vf-button>
     <vf-button icon="menu" />
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.wrapper button {
  margin-right: 15px;
}
</style>

