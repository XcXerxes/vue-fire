<template>
  <div class="wrapper">
    <vf-select>
      <li v-for="(item, key) in options" :key="item.value">{{item.label}}</li>
    </vf-select>
  </div>
</template>

<script>
export default {
  data: () =>({
    options: [
      {label:'Giselle',value:1},
      {label:'Araldo',value:2},
      {label:'Gwyn',value:3},
      {label:'Farrel',value:4},
      {label:'Maggi',value:5}
    ]
  })
}
</script>

