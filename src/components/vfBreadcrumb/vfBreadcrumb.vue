<template>
  <div class="vf-breadcrumb">
    <ul v-if="getItems.length > 0" class="vf-breadcrumb__items">
      <template v-for="(item, key) in getItems">
        <li v-if="item.disabled" :key="key" class="vf-breadcrumb__item"
        :class="{
          disabled: item.disabled
        }"
        >
          <span>{{item.title}}</span>
          <span v-if="key < getItems.length - 1" class="vf-breadcrumb__separator">{{separator}}</span>
        </li>
        <li :key="key" v-else>
          <a :href="item.link">{{item.title}}</a>
          <span class="vf-breadcrumb__separator">{{separator}}</span>
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'VfBreadcrumb',
  props: {
    items: {
      type: Array,
      required: true,
      default: () => {}
    },
    separator: {
      type: String,
      default: '/'
    }
  },
  computed: {
    getItems(){
      if (!this.items) {
        return []
      }
      if (!Array.isArray(this.items)) {
        console.warn('props items must be array!')
      }
      return this.items
    }
  }
}
</script>
