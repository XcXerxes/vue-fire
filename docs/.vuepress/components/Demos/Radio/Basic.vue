<template>
  <div class="wrapper">
    <vf-radio v-model="radio" vf-value="female" >Raido1</vf-radio>
    <vf-radio v-model="radio" vf-value="male" >Raido2</vf-radio>
  </div>
</template>
<script>
export default {
  data: () =>({
    radio: 'male'
  })
}
</script>

