<template>
  <div class="wrapper">
    <vf-checkbox v-model="checkbox">{{checkbox}}</vf-checkbox>
    <vf-checkbox v-model="checkbox2" vf-value="leo">{{checkbox2}}</vf-checkbox>
    <vf-checkbox v-model="checkbox3" disabled>Disabled</vf-checkbox>
  </div>
</template>
<script>
export default {
  data: () =>({
    checkbox: false,
    checkbox2: null,
    checkbox3: false
  })
}
</script>

