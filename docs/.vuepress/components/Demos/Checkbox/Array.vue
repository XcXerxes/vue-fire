<template>
  <div class="checkbox-group">
    <p :style="{margin: '8px 0'}">选中的值：{{checkbox}}</p>
    <vf-checkbox v-for="(item, index) in options" :vf-value="item" :key="index" v-model="checkbox">{{item}}</vf-checkbox>
  </div>
</template>
<script>
export default {
  data: () =>({
    options: ['Leo', 'LiLei', 'Jacky'],
    checkbox: []
  })
}
</script>

