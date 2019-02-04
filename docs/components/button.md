## 按钮 Button

<box>

### 基础使用

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

### 边框模式

<vuecode md>

<div slot="demo">
  <Demos-Button-Border />
</div>

<div slot="code">

```html
<template>
  <div>
    <vf-button
    v-for="(item, key) in list" :key="key" :type="item.type"
    :disabled="key === list.length - 1 ? true : false"
    mode="border"
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

### 带图标和文字的按钮

<vuecode md>

<div slot="demo">
  <Demos-Button-Icon />
</div>

<div slot="code">

```html
<template>
  <div class="wrapper">
    <vf-button icon="home">主页</vf-button>
    <vf-button type="warning" icon="star" icon-position="suffix">Star</vf-button>
    <vf-button>
      <vf-icon slot="prefix" icon="search" :style="{marginRight: '3px'}" />
      搜索
    </vf-button>
     <vf-button icon="delete" type="danger" mode="border"  >
      删除
    </vf-button>
     <vf-button icon="info" mode="border" disabled  >
      Disabled
    </vf-button>
     <vf-button icon="menu" />
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.wrapper button {
  margin-right: 15px;
}
</style>
```

</div>

</vuecode>

</box>

<box>

### 按钮尺寸

* 按钮有大、中、小三种尺寸。通过设置 ```size``` 为 ```large``` , ```small``` 分别把按钮设为大、小尺寸。若不设置 ```size```，则尺寸为中。

<vuecode md>

<div slot="demo">
  <Demos-Button-Size />
</div>
<div slot="code">

```html
<template>
  <div>
    <vf-button size="small" >Small</vf-button>
    <vf-button>Default</vf-button>
    <vf-button size="large" >Large</vf-button>
  </div>
</template>
```

</div>

</vuecode>

</box>

<box>

### Route跳转/ Href跳转

* 按钮有大、中、小三种尺寸。通过设置 ```size``` 为 ```large``` , ```small``` 分别把按钮设为大、小尺寸。若不设置 ```size```，则尺寸为中。

<vuecode md>

<div slot="demo">
  <Demos-Button-Router />
</div>
<div slot="code">

```html
<template>
  <div>
    <vf-button to="/">普通路由</vf-button>
    <vf-button :to="{path: '/'}" type="success">对象路由</vf-button>
    <vf-button mode="border" href="https://google.com">href本页跳转</vf-button>
    <vf-button mode="border" target href="https://google.com">href新页跳转</vf-button>
  </div>
</template>
```

</div>

</vuecode>

</box>