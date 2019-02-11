<template>
  <div class="wrapper">
    <vf-checkbox v-model="checkbox">{{checkbox}}</vf-checkbox>
    <vf-checkbox v-model="checkbox2" vf-value="leo">{{checkbox2}}</vf-checkbox>
    <vf-checkbox v-model="checkbox4" size="small">{{checkbox4}}</vf-checkbox>
    <vf-checkbox v-model="checkbox5" size="large">{{checkbox5}}</vf-checkbox>
  </div>
</template>
<script>
export default {
  data: () =>({
    checkbox: false,
    checkbox2: null,
    checkbox4: false,
    checkbox5: false,
  })
}
</script>

