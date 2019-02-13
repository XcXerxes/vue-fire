<template>
  <li class="vf-select__item">
    <span class="vf-item__content"></span>
    <i class="material-icons icon-item vs-select--item-icon">check_circle</i>
  </li>
</template>
<script>
export default {
  name: 'vfSelectItem',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
