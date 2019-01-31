<template>
  <button class="vf-button"
    ref="btn"
    v-bind="$attrs"
    :class="[`vf-button__${type}`, `vf-button__${mode}`, {
      'include-icon': formatIcon
    }, size]" 
    style="margin-right: 8px;"
    v-on="listeners"
    >
    <vf-icon v-if="icon" :icon="icon" :style="iconStyle" />
    <slot v-if="!icon" name="prefix">
    </slot>
    <span
      v-if="mode === 'filled'"
      ref="backgroundx"
      :style="stylesBackGround"
      class="vf-button__backgroundx vf-button--background">
    </span>
    <span class="vf-button__text">
      <slot />
    </span>
    <slot v-if="!icon" name="suffix">
      
    </slot>
  </button>
</template>
<script>
export default {
  props: {
    mode: {
      type: String,
      default: 'filled'
    },
    type: {
      type: String,
      default: 'primary'
    },
    bordered: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    iconPosition: {
      type: String,
      default: 'prefix'
    },
    size: {
      type: String,
      default: 'default'
    },
    href: {
      type: String,
      default: '/'
    },
    target: {
      type: Boolean,
      default: false
    },
    to: {
      type: Object | String,
      default: false
    },
    href: {
      type: String,
      default: ''
    }
  },
  name: 'VfButton',
  data: () => ({
    isActive: false,
    leftBackground: 20,
    topBackground: 20,
    radio: 0,
    time: .3,
    timeOpacity: .6,
    opacity: 1
  }),
  computed: {
    formatIcon() {
      // if(this.icon || this.$slots.prefix || this.$slots.suffix) {
      //   return true
      // }
      // return false
      return Boolean(this.icon || this.$slots.prefix || this.$slots.suffix)
    },
    iconStyle() {
      if (this.iconPosition === 'suffix') {
        return {
          order: 2,
          marginLeft: this.$slots.default ? '3px' : 0
        }
      }
      return {
        marginRight: this.$slots.default ? '3px' : 0
      }
    },
    stylesBackGround() {
      return {
        background: null,
        opacity: this.opacity,
        left: `${this.leftBackground}px`,
        top: `${this.topBackground}px`,
        width: `${this.radio}px`,
        height: `${this.radio}px`,
        transition: `width ${this.time * 2}s ease, height ${this.time * 2}s ease, opacity ${this.timeOpacity * 2}s ease`
      }
    },
    // 绑定所有的事件监听
    listeners() {
      return {
        ...this.$listeners,
        click: event => this.handleClick(event)
      }
    }
  },
  created() {
    console.log(this.$attrs)
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
      if (this.isActive) {
        return
      }
      // 如果作为 router
      if(this.to) {
        this.$router.push(this.to)
      }
      // 如果作为 href
      if (this.href) {
        this.target ? window.open(this.href) : window.location.href = this.href
      }

      //点击的波纹效果
      this.isActive = true
      const {btn} = this.$refs
      let xEvent = event.offsetX
      let yEvent = event.offsetY
      let radio = btn.clientWidth * 6
      this.time = btn.clientWidth / (btn.clientWidth + 20)
      this.timeOpacity = this.time

      if (event.srcElement && event.srcElement !== btn) {
        xEvent += event.target.offsetLeft
        yEvent += event.target.offsetTop
      }
      this.leftBackground = xEvent
      this.topBackground = yEvent
      this.radio = radio
      this.opacity = 0
      setTimeout(() => {
        this.time = this.timeOpacity = this.radio = 0
        this.opacity = 1
        this.isActive = false
      }, this.time * 1000)
    }
  }
}
</script>
