<template>
  <div class="vf-input"
    :class="[`vf-input__${color}`]"
  >
    <input type="text" placeholder="search" >
  </div>
</template>
<script>
export default {
  name: 'VfInput',
  props: {
    color: {
      type: String,
      default: 'primary'
    }
  }
}
</script>
