<template lang="html">
  <div class="centerx">
    <vf-alert
    :active="active"
    >
      提示性信息!
    </vf-alert>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active:true,
    }
  }
}
</script>