<template>
  <div class="vf-radio"
    :class="[`vf-radio__${color}`, {
      [`vf-radio__${size}`]: size
    }]"
  >
    <input type="radio"
      :value="value"
      :checked="isChecked"
      v-bind="$attrs"
      v-on="listeners"
    >
    <div class="vf-radio__check">
      <span class="vf-radio__borde">
      </span>
      <span class="vf-radio__circle"></span>
    </div>
    <span class="vf-radio__label">
      <slot />
    </span>
  </div>
</template>
<script>
export default {
  name: 'vfRadio',
  props: {
    value: {},
    vfValue: {},
    color: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: ''
    }
  },
  computed: {
    isChecked() {
      return this.value === this.vfValue
    },
    listeners() {
      return {
        ...this.$listeners,
        input: () => {
          this.$emit('input', this.vfValue)
        }
      }
    }
  }
}
</script>

