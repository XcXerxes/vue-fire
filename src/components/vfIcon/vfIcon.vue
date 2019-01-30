<template>
  <i
    :style="iconStyle"
    class="vf-icon notranslate icon-scale"
    :class="iconClass"
  >
    {{ iconPack === 'material-icons' ? icon: ''  }}
  </i>
</template>
<script>
export default {
  name: 'VfIcon',
  props: {
    icon: {
      type: String,
      default: null
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    },
    size: {
      type: String,
      default: 'medium'
    }
  },
  computed: {
    iconStyle() {
      return {}
    },
    iconClass() {
      const {iconPack, icon, size} = this
      const defaultIcon = iconPack == 'material-icons' ? icon : ''
      return [iconPack, defaultIcon, size]
    }
  }
}
</script>
