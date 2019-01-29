<template lang="html">
  <div class="centerx">
    <vf-alert
    :active.sync="active"
    closable
    v-on:close="onClose"
    >
      显示关闭按钮，点击可关闭警告提示。
    </vf-alert>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active:true,
    }
  },
  methods: {
    onClose(info) {
      console.log(info)
    }
  }
}
</script>
