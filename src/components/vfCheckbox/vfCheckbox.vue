<template>
  <div class="vf-checkbox"
    :class="[`vf-checkbox__${color}`, {
      [`vf-checkbox__${size}`]: size
    }]"
  >
    <input type="checkbox"
      v-on="liseners"
      v-bind="$attrs"
      :checked="isChecked"
    >
    <div class="vf-checkbox__wrapper"
      :style="styleWrapper"
    >
      <span class="vf-checkbox__check"
        :style="styleCheck"
      >
        <vf-icon :icon="icon" :icon-pack="iconPack" class="vf-checkbox__icon" />
      </span>
    </div>
    <span class="vf-checkbox__label">
      <slot />
    </span>
  </div>
</template>
<script>
import colors from '../../utils/colors'
export default {
  name: 'vfCheckbox',
  inheritAttrs: false,
  props: {
    value: {},
    color: {
      type: String,
      default: 'primary'
    },
    icon: {
      type: String,
      default: 'check'
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    },
    vfValue: {
      type: [Boolean, Array, String, Number, Object],
      default: false
    },
    size: {
      type: String,
      default: ''
    }
  },
  computed: {
    styleWrapper() {
      return {
        borderColor: this.isChecked ? colors.getColor(this.color, 1) : null
      }
    },
    styleCheck() {
      return {
        background: this.isChecked ? colors.getColor(this.color, 1) : null
      }
    },
    liseners() {
      return {
        ...this.$listeners,
        change: (event) => {
          this.toggleValue(event)
        },
        input: (event) => {
          this.toggleValue(event)
        }
      }
    },
    isChecked() {
      return this.isArrayx() ? this.isArrayInclude() : this.value
    }
  },
  methods: {
    toggleValue(event) {
      if (this.isArrayx()) {
        this.setValueArray()
      } else if (typeof this.value === 'string' || this.value === null) {
        this.setValueString(event)
      } else {
        this.$emit('input', !this.value)
        this.$emit('change', event)
      }
    },
    setValueString(event) {
      if (this.value === this.vfValue) {
        this.$emit('input', null)
        this.$emit('change', event)
      } else {
        this.$emit('input', this.vfValue)
        this.$emit('change', event)
      }
    },
    setValueArray() {
      const newValue = [...this.value]
      if (this.isArrayInclude()) {
        const value = [...this.value.slice(0, this.value.indexOf(this.vfValue)), ...this.value.slice(this.value.indexOf(this.vfValue) + 1)]
        this.$emit('input', value)
        this.$emit('change', value)
      } else {
        this.$emit('input', [...this.value, this.vfValue])
        this.$emit('change', [...this.value, this.vfValue])
      }
    },
    isArrayx() {
      return Array.isArray(this.value)
    },
    isArrayInclude() {
      return this.value.indexOf(this.vfValue) !== -1
    }
  },
  created() {
    console.log(this.value)
  }
}
</script>
