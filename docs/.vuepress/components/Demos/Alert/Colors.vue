<template>
  <div class="centerx">
    <template v-for="(item, key) in colors" >
      <div class="item">
        <vf-alert
        :key="key"
        :active="active(key)"
        :type="item.type"
        :title="item.title"
        closable
        @close="bool => close(bool, key)"
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
    active0: true,
    active1: true,
    active2: true,
    active3: true
  }),
  methods: {
    active(key) {
      return this[`active${key}`]
    },
    close(bool, key) {
      this[`active${key}`] = bool
    }
  }
}
</script>
<style lang="scss" scoped>
  .item {
    margin-bottom: 15px;
  }
</style>

