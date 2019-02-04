<template>
  <div class="sidebar">
    <ul class="sidebar-links">
      <li v-for="(item, key) in list" class="sidebar-link">
        <SidebarGroup :key="key" :item="item" />
      </li>
    </ul>
  </div>
</template>
<script>
import SidebarGroup from './SidebarGroup'
export default {
  components: {
    SidebarGroup
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>
