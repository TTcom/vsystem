import Vue from "vue"

let contexts = require.context("/", false, /\.vue$/)
contexts.keys().forEach(component => {
  // debugger;
  let componentEntity = contexts(component).default
  // 使用内置的组件名称 进行全局组件注册

  console.log(component)
  console.log(componentEntity)
  let name = component.match(/\.\/(\S*)\.vue/)[1]
  name = name.replace(name[0], name[0].toUpperCase())

  console.log(name)
  Vue.component(componentEntity.name, componentEntity)
})
