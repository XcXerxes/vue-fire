<template>
  <div class="wrapper">
    <vf-checkbox v-model="checkbox">Primary</vf-checkbox>
    <vf-checkbox v-model="checkbox2" color="success">Success</vf-checkbox>
    <vf-checkbox v-model="checkbox3" color="danger">Danger</vf-checkbox>
    <vf-checkbox v-model="checkbox4" color="warning">warning</vf-checkbox>
    <vf-checkbox v-model="checkbox5" color="#720ea8">HRX</vf-checkbox>
  </div>
</template>
<script>
export default {
  data: () =>({
    checkbox: true,
    checkbox2: true,
    checkbox3: true,
    checkbox4: true,
    checkbox5: true
  })
}
</script>

