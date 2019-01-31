<template>
  <div class="vf-input"
    :class="[`vf-input__${color}`]"
  >
    <input :type="$attrs.type || 'text'"
      ref="input"
      :value="value"
      v-bind="$attrs"
      :placeholder="null"
      v-on="listeners"
    >
    <span v-if="!isHasValue" 
      class="vf-input__placeholder"
      @click="placeholderClick"
    >{{$attrs.placeholder}}</span>
  </div>
</template>
<script>
export default {
  name: 'VfInput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    color: {
      type: String,
      default: 'primary'
    }
  },
  data: () =>({
    isHasValue: false
  }),
  computed: {
    listeners() {
      debugger
      return {
        ...this.$listeners,
        
        input: event => this.handleInput(event)
      }
    }
  },
  methods: {
    handleInput(event) {
      const {value} = event.target
      this.$emit('input', event.target.value)
      if (!this.cacheValue['cacheValue']) {
        if (value) {
          this.cacheValue.cacheValue = true
          this.isHasValue = true
        }
      }
      if (!value) {
        this.cacheValue['cacheValue'] = false
        this.isHasValue = false
      }
    },
    placeholderClick() {
      this.$refs.input.focus()
    }
  },
  created() {
    this.cacheValue = {}
  }
}
</script>
