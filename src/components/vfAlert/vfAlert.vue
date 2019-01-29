<template>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <div class="com-vf-alert"
    ref="alert"
      :class="[`com-vf-alert-${type}`]"
      v-if="active"
      v-bind="$attrs"
    >
    <h4
      v-if="title"
      class="vf-alert__title"
    >
      {{title}}
    </h4>
    <div class="vf-alert__close" v-if="closable"
      @click="closeClick"
    >
      <vf-icon :icon="closeIcon" />
    </div>
    <div class="vf-alert" :class="[{'close-icon': closable}, {'has-icon': showIcon}]">
      <div class="vf-alert__icon" v-if="showIcon">
        <vf-icon :icon="icon" />
      </div>
      <slot />
    </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'VfAlert',
  props: {
    active: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'primary'
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: false
    },
    closeIcon: {
      type: String,
      default: 'close'
    },
    close: {
      type: Function,
      default: null
    }
  },
  mounted() {
    let h = this.$refs.alert.scrollHeight
    this.$refs.alert.style.height = `${h}px`
  },
  methods: {
    beforeEnter: function(el) {
      el.style.height = 0
      el.style.opacity = 0
    },
    enter: function(el, done) {
      let h = this.$refs.alert.scrollHeight
      el.style.opacity = 1
      this.$refs.alert.style.height = `${h}px`
      done()
    },
    leave: function(el) {
      this.$refs.alert.style.height = 0
      el.style.opacity = 0
    },
    closeClick() {
      debugger
      this.$emit('close', !this.active)
    }
  }
}
</script>
