<template>
  <li class="vf-select__item"
    :class="[{
      'multiple-active': isMultipleActive,
      'active': isActive
    }, `vf-select__item-${$parent.color}`]"
    v-bind="$attrs"
    v-on="listeners"
  >
    <span class="vf-select__item-content">{{text}}</span>
    <i v-if="$parent.multiple" class="material-icons icon-item vf-select__item-icon">check_circle</i>
  </li>
</template>
<script>
export default {
  name: 'vfSelectItem',
  inheritAttrs: false,
  data: () => ({
    active: false
  }),
  props: {
    value: {
      default: null 
    },
    text: {
      type: String,
      default: ''
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        click: (event) => this.itemClick(event)
      }
    },
    isActive() {
      if (!this.$parent.multiple) {
        return this.value === this.$parent.value
      }
      return false
    },
    isMultipleActive() {
      if (this.$parent.multiple) {
        return true
      }
      return false
    }
  },
  methods: {
    itemClick(event) {
      if (this.$parent.multiple) {
        this.active = true
      } else if (!this.$parent.multiple) {
        this.$parent.active = false
        this.$parent.valuex = this.text
        this.$parent.$emit('input', this.value)
      }
    },
    setValue() {
      if (this.$parent.value === this.value) {
        this.$parent.valuex = this.text
      }
    }
  },
  created() {
    console.log('item')
    this.setValue()
  }
}
</script>
