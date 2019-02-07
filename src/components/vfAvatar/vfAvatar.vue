<template>
  <div
    class="vf-avatar"
    :class="{
      [`vf-avatar__${color}`]: !src && color,
      [`vf-avatar__${size}`]: size
    }"
  >
    <span class="vf-avatar__text" v-if="(text && !src) || icon" :style="textStyle">{{getText}}
      <vf-icon v-if="icon" :icon="icon" />
    </span>
    <div class="vf-avatar__img" v-if="src">
      <img :src="src" :alt="src">
    </div>
  </div>
</template>
<script>
export default {
  name: "VfAvatar",
  props: {
    text: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    textColor: {
      type: String,
      default: ""
    },
    src: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    }
  },
  computed: {
    textStyle() {
      if (this.text.length > 1) {
        return {
          transform: `translate(-50%, -50%) scale(${this.text.length > 5 ? 1 : .667})`
        }
      }
      return {}
    },
    getText() {
      if (!this.icon) {
        const wordRexp = /[A-Za-z]/
        const { text } = this
        if (wordRexp.test(text[0])) {
          const newText = text.replace(text[0], text[0].toUpperCase())
          if (newText.length > 5) {
            return newText.substr(0, 1)
          }
          return newText
        }
        return text
      }
      return ''
    }
  }
}
</script>
