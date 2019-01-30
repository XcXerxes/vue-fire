<template>
  <button class="vf-button"
    ref="btn"
    v-bind="$attrs"
    :class="[`vf-button__${type}`, `vf-button__${mode}`]" 
    style="margin-right: 8px;"
    v-on="listeners"
    >
    <span
      ref="backgroundx"
      :style="stylesBackGround"
      class="vf-button__backgroundx vf-button--background">
    </span>
    <span class="vf-button__text">
      <slot />
    </span>
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
