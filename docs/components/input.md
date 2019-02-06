## 输入框 Input

<box>

### 基本的输入框

  <vuecode md>

  <div slot="demo">
    <Demos-Input-Basic />
  </div>

  <div slot="code">

```html
<template>
  <div class="wrapper">
    <vf-input class="input-item" placeholder="Basic use" />
    <vf-input class="input-item"  placeholder="请输入..." v-model="value1" />
    <vf-input class="input-item"  placeholder="请输入..." disabled />
  </div>
</template>
<script>
export default {
  data: () =>({
    value1: '',
    value2: '',
    value3: '',
  })
}
</script>
<style lang="scss" scoped>
.wrapper {
  .input-item {
    margin-bottom: 15px;
  }
}
</style>
```

  </div>

  </vuecode>

</box>

<box>

### 带图标的输入框

可以通过设置 ```prefix-icon``` 或者 ```suffix-icon``` 给 输入框添加 前缀图标 和 后缀图标

<vuecode md>

<div slot="demo">
  <Demos-Input-Icon />
</div>

<div slot="code">

```html
<template>
  <div class="wrapper">
    <vf-input class="input-item" placeholder="设置前缀图标..." prefix-icon="search" v-model="value2" />
    <vf-input class="input-item" placeholder="设置后缀图标..." suffix-icon="delete" v-model="value3" />
  </div>
</template>
<script>
export default {
  data: () =>({
    value2: '',
    value3: '',
  })
}
</script>
<style lang="scss" scoped>
.wrapper {
  .input-item {
    margin-bottom: 15px;
  }
}
</style>
```

</div>

</vuecode>

</box>

<box>

### Colors

可以通过设置 ```color``` 属性 修改 ```hover``` 时边框的颜色

<vuecode md>
  <div slot="demo">
    <Demos-Input-Colors />
  </div>
</vuecode>

</box>