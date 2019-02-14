<template>
  <div class="vf-select"
    :class="{
      'active': active
    }"
  >
    <div class="vf-select__input">
      <input type="text"
        ref="inputSelect"
        :placeholder="placeholder"
        v-bind="$attrs"
        v-on="listeners"
        :readonly="!autocomplete"
        :value="valuex"
      >
      <vf-icon
        :icon="icon"
        :icon-pack="iconPack"
        class="select-icon"
      />
    </div>
    <transition name="fadeselect" >
      <div class="vf-select__options"
        v-show="active"
        ref="vfSelectOptions"
        :style="cords"
      >
        <ul ref="vfSelectul">
          <slot />
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'vfSelect',
  data: () =>({
    active: false,
    cords: {},
    valuex: ''
  }),
  props: {
    value: {},
    multiple: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请选择...'
    },
    color: {
      type: String,
      default: 'primary'
    },
    icon: {
      type: String,
      default: 'keyboard_arrow_down'
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    },
    autocomplete: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value(event) {
      this.$emit('change', event)
    },
    active(newValue, value) {
      if (newValue) {
        this.insertBody(this.$refs.vfSelectOptions)
      } else {
        let [parent] = document.getElementsByTagName('body')
        parent.removeChild(this.$refs.vfSelectOptions)
      }
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
          // this.active = false
        }
      }
    }
  },
  methods: {
    insertBody(elx) {
      document.body.insertBefore(elx, document.body.firstChild)
    },
    changePosition() {
      debugger
      const {inputSelect, vfSelectOptions} = this.$refs
      const { autocomplete } = this
      let topx = 0
      let leftx = 0
      let widthx = 0
      // window.pageYOffset == window.scrollY
      let scrollTopx = window.pageYOffset || document.documentElement.scrollTop
      // 当前元素相对于屏幕左上角的top 值
      const rectTop = inputSelect.getBoundingClientRect().top
      // options列表的滚动高度
      const optScrollHeight = vfSelectOptions.scrollHeight
      /**
       * 适配 select 是下开 还是 上开
       */
      if ( rectTop + optScrollHeight + 20 >= window.innerHeight) {
        topx = (rectTop + inputSelect.clientHeight) + scrollTopx - vfSelectOptions.scrollHeight
      } else {
        topx = rectTop + scrollTopx
      }
      leftx = inputSelect.getBoundingClientRect().left
      widthx = inputSelect.offsetWidth
      return {
        left: `${leftx}px`,
        top: `${topx}px`,
        width: `${widthx}px`
      }
    },
    focus(event) {
      debugger
      this.active = true
      let {inputSelect} = this.$refs
      if (!this.autocomplete) {

      }
      this.$nextTick(() => {
        this.cords = this.changePosition()
      })
    }
  }
}
</script>

