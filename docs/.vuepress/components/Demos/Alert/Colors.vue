<template>
  <div class="centerx">
    <template v-for="(item, key) in colors" >
      <div class="item">
        <vf-alert
        :key="key"
        :active.sync="active"
        :type="item.type"
        :title="item.title"
        closable
        >
          {{item.desc}}
        </vf-alert>
      </div>
    </template>
  </div>
</template>
<script>
import colors from './config'
export default {
  data: () => ({
    colors,
    active: true
  })
}
</script>
<style lang="scss" scoped>
  .item {
    margin-bottom: 15px;
  }
</style>

