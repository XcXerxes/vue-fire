# Button 按钮

<box>

## 基础使用

<vuecode md>

<div slot="demo">
  <Demos-Button-Basic />
</div>

<div slot="code">

```html
<template>
  <div>
    <vf-button
    v-for="(item, key) in list" :key="key" :type="item.type" 
    :disabled="key === list.length - 1 ? true : false"
    >{{item.name}}</vf-button>
  </div>
</template>
<script>
export default {
  data() {
    const arr = ['primary', 'danger', 'success', 'warning', 'dark', 'disabled']
    const list = arr.map(item => {
      return {
        type: item === 'disabled' ? 'primary' : item,
        name: item.replace(item.substr(0, 1), item.substr(0, 1).toUpperCase())
      }
    })
    return {
      list
    }
  }
}
</script>
```

</div>

</vuecode>

</box>

<box>

## 边框模式


</box>