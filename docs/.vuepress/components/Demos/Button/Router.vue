<template>
  <div>
    <vf-button to="/">普通路由</vf-button>
    <vf-button :to="{path: '/'}" type="success">对象路由</vf-button>
    <vf-button mode="border" href="https://google.com">href本页跳转</vf-button>
    <vf-button mode="border" target href="https://google.com">href新页跳转</vf-button>
  </div>
</template>
