<template>
  <div class="wrapper">
    <vf-select v-model="selectx">
      <vf-select-item v-for="(item, key) in options" :key="item.value" :value="item.value" :text="item.label" />
    </vf-select>
    <div :style="{height: '1000px'}" ></div>
     <vf-select>
      <li v-for="(item, key) in options" :value="item.value" :key="item.value">{{item.label}}</li>
    </vf-select>
    <div :style="{height: '1000px'}" ></div>
  </div>
</template>

<script>
export default {
  data: () =>({
    selectx: 1,
    options: [
      {label:'Giselle',value:1},
      {label:'Araldo',value:2},
      {label:'Gwyn',value:3},
      {label:'Farrel',value:4},
      {label:'Maggi',value:5},
      {label:'Maggi',value:6},
      {label:'Maggi',value:7},
      {label:'Maggi',value:8},
      {label:'Maggi',value:9},
      {label:'Maggi',value:10}
    ]
  })
}
</script>

