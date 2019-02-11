<template>
  <div class="checkbox-group">
    <vf-checkbox v-for="(item, index) in options" :size="item.type" :vf-value="item.title" :key="index" v-model="checkbox">{{item.label}}</vf-checkbox>
  </div>
</template>
<script>
export default {
  data: () =>({
    options: [
      {
        title: 'Leo',
        type: 'small',
        label: 'Small'
      },
      {
        title: 'LiLei',
        type: '',
        label: 'Default'
      },
      {
        title: 'Jacky',
        type: 'large',
        label: 'Large'
      },
    ],
    checkbox: []
  })
}
</script>
