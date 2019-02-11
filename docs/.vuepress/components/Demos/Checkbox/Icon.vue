<template>
  <div class="wrapper">
    <vf-checkbox v-model="checkbox">Check</vf-checkbox>
    <vf-checkbox v-model="checkbox2" color="success" icon="close">Close</vf-checkbox>
    <vf-checkbox v-model="checkbox3" color="danger" icon="attach_file">Attach</vf-checkbox>
    <vf-checkbox v-model="checkbox4" color="warning" icon="camera_alt">Camera</vf-checkbox>
    <vf-checkbox v-model="checkbox5" color="#720ea8" icon="location_searching">Location</vf-checkbox>
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
