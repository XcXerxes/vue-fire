<template>
  <div class="vf-select">
    <div class="vf-select__input">
      <input type="text"
        ref="inputSelect"
        :placeholder="placeholder"
        v-bind="$attrs"
        v-on="listeners"
        readonly
      >
      <vf-icon
        :icon="icon"
        :icon-pack="iconPack"
        class="select-icon"
      />
    </div>
    <transition>
      <div class="vf-select__options"
        v-show="active"
        ref="vsSelectOptions"
        :style="cords"
      ></div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'vfSelect',
  data: () =>({
    active: false,
    cords: {}
  }),
  props: {
    value: {},
    placeholder: {
      type: String,
      default: '请选择...'
    },
    icon: {
      type: String,
      default: 'keyboard_arrow_down'
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    }
  },
  watch: {
    value(event) {
      this.$emit('change', event)
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        focus: (event) => {
          this.$emit('focus', event)
          this.focus(event)
        },
        blur: event => {
          this.$emit('blur', event)
        }
      }
    },
    cords() {

    }
  },
  methods: {
    changePosition() {

    },
    focus(event) {
      this.active = true
    }
  }
}
</script>

