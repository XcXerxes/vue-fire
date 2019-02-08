<template>
  <vf-breadcrumb :items="items1" separator="-" />
</template>
<script>
export default {
  data: () =>({
    items1: [
      {
        title: 'Home',
        link: 'home'
      },
      {
        title: 'Dashboard',
        link: 'dashboard'
      },
      {
        title: 'Chart',
        link: 'chart',
        disabled: true
      }
    ]
  })
}
</script>
