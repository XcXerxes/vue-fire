## 头像 Avatar

<box>

### 基本使用

<vuecode md>
  <div slot="demo">
    <Demos-Avatar-Basic />
  </div>
</vuecode>

</box>

<box md>

### 尺寸类型

avatar 的尺寸分为 大， 中，小三种尺寸，
通过设置 ```size``` 为 ```large``` ```small```。 如若不设置 ```size```, 则尺寸为 中

<vuecode md>
<div slot="demo">
  <Demos-Avatar-Size />
</div>
<div slot="code">

```html
<template>
  <div class="wrapper">
    <vf-avatar text="l" class="item" size="small" />
    <vf-avatar text="leo" class="item" />
    <vf-avatar src="https://placeimg.com/320/320/people" class="item" size="large" />
    <vf-avatar icon="person" class="item" :style="{width: '70px', height: '70px'}" />
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .wrapper {
    .item {
      margin: 5px;
    }
  }
</style>
```

</div>
</vuecode>
</box>
<box>

### 颜色

avatar 可以设置不同的主体颜色，通过设置 ```color``` 改变 avatar 背景的颜色。

<vuecode md>
<div slot="demo">
  <Demos-Avatar-Color />
</div>
<div slot="code">

```html
<template>
  <div class="wrapper">
    <vf-avatar text="l" class="item" color="primary" />
    <vf-avatar text="leo" class="item" color="success" />
    <vf-avatar text="Antony" class="item" color="warning" />
    <vf-avatar text="James" class="item" color="danger" />
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .wrapper {
    .item {
      margin: 5px;
    }
  }
</style>

```

</div>
</vuecode>
</box>