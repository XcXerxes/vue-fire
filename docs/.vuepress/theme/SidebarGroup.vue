<template>
  <div class="sidebar-group">
    <div class="sidebar-heading">
      <vf-icon :icon="item.icon" />
      <span>{{item.title}}</span>
    </div>
    <ul class="sidebar-group__list">
      <li v-for="(child, key) in item.children">
        <SidebarLink :key="key" :item="child" />
      </li>
    </ul>
  </div>
</template>

<script>
import SidebarLink from './SidebarLink'
export default {
  components: {
    SidebarLink
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

