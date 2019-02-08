<template>
  <div class="vf-progress"
    ref="progress"
    :class="`vf-progress__${color}`"
    :style="progressStyle"
    v-bind="$attrs"
  >
    <div class="vf-progress__foreground" :style="foregroundStyle" />
    <div v-if="indeterminate" class="vf-progress__indeterminate" />
  </div>
</template>
<script>
import colors from '../../utils/colors.js'
export default {
  name: 'vfProgress',
  props: {
    percent: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: 'primary'
    },
    height: {
      type: [Number, String],
      default: 5
    },
    indeterminate: {
      type: Boolean || null,
      default: null
    }
  },
  computed: {
    show() {
      
    },
    progressStyle() {
      return {
        background: colors.getColor(this.color, .1),
        height: `${this.height}px`
      }
    },
    foregroundStyle() {
      return {width : this.indeterminate !== null ? '0%' : `${this.percent}%`, background: colors.getColor(this.color, 1)}
    }
  },
  mounted() {
    debugger
  }
}
</script>
