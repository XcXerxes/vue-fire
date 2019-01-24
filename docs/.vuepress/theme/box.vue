<template lang="html">
  <div class="content-box">
    <div class="box">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    let h = this.$el.querySelector('h2') || this.$el.querySelector('h3')
    // if (h) {
    //   let a = h.querySelector('a')
    //   console.dir(a.attributes[0].value.replace('#', ''))
    //   let hrefx = a.attributes[0].value.replace('#', '')
    //   a.parentNode.id = ''
    //   a.closest('.content-box').id = hrefx

    // }
  }
}
</script>

