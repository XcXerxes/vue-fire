# Alert 警告提示

<box>

  警告提示，展现需要关注的信息。
  
</box>

<box>

## 何时使用

- 当某个页面需要向用户显示警告的信息时。

- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

</box>

<box>

## 基本用法

最简单的用法，适用于简短的警告提示。

<vuecode md>
<div slot="demo">
  <Demos-Alert-Basic />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vf-alert
    :active.sync="active1"
    showIcon
    >
      Lorem ip
      sum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
    </vf-alert>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active1:true,
    }
  }
}
</script>
```


</div>
</vuecode>
</box>

<box>

## 可关闭的警告框

显示关闭按钮，点击可关闭警告提示。

<vuecode md>

<div slot="demo">
  <Demos-Alert-Closable />
</div>

<div slot="code">

  ```html
  <template lang="html">
    <div class="centerx">
      <vf-alert
      :active.sync="active"
      closable
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
  }
}
</script>
```

</div>

</vuecode>

</box>

<box>

## 样式

共有多种样式  ```success```、 ```primary```、 ```warning```、 ```danger``` 。

<vuecode md>

<div slot="demo">
  <Demos-Alert-Colors />
</div>

<div slot="code">

```html
<template>
  <div class="centerx">
    <template v-for="(item, key) in colors" >
      <div class="item">
        <vf-alert
        :key="key"
        :active="active(key)"
        :type="item.type"
        :title="item.title"
        closable
        @close="bool => close(bool, key)"
        >
          {{item.desc}}
        </vf-alert>
      </div>
    </template>
  </div>
</template>
<script>
import colors from './config'
export default {
  data: () => ({
    colors,
    active0: true,
    active1: true,
    active2: true,
    active3: true
  }),
  methods: {
    active(key) {
      return this[`active${key}`]
    },
    close(bool, key) {
      this[`active${key}`] = bool
    }
  }
}
</script>
<style lang="scss" scoped>
  .item {
    margin-bottom: 15px;
  }
</style>
```

</div>

</vuecode>


</box>
