<template>
  <div class="vue_router onlearncontent">
    <h3>
      路由模式hash和history
    </h3>
    <highcode :language="'markdown'">router有两种模式：hash模式（默认）、history模式</highcode>
    <div class="on_text">hash模式:</div>
    <div class="on_text">
      路由的哈希模式地址带#号，利用了window可以监听onhashchange事件，当url中的哈希值（#后面的值）如果有变化，前端是可以做到监听并做一些响应，即使前端并没有发起http请求他也能够找到对应页面的代码块进行按需加载
    </div>
    <div class="on_text">history模式:</div>
    <div class="on_text">
      路由的history模式地址不带#号，利用了两个H5的api：pushState与replaceState，url改变的同时又不刷新页面，但需要后端人员去配置url重定向的问题，不然在访问二级页面时，做刷新操作会找不到页面报404的错误，当地址改变时并没有发送HTTP请求，但是一旦刷新页面就会发送HTTP请求，会找不到页面报404的错误
    </div>
  </div>
</template>
<script>
export default {
  name: "vueRouter",
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped></style>
