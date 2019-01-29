<template>
  <transition name="alertSlide">
    <div class="vf-alert"></div>
  </transition>
</template>
<script>
export default {
  name: 'VfAlert',
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
}
</script>
