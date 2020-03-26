import Vue from 'vue';
import Loading from './loading.vue';
const Mask = Vue.extend(Loading);

const loadingDirective = {};

loadingDirective.install = Vue => {

const toggleLoading = (el, binding) => {
    if (binding.value) {
      Vue.nextTick(() => {
            var curClass = el.className;
            el.className = curClass ? curClass + ' ' +'loadrelative' : 'loadrelative'
            el.appendChild(el.mask);
            el.instance.visible = true;
            el.domVisible = true;
            console.log(el, binding);

      });
    } else {
      el.instance.visible = false;
      el.instance.hiding = true;
    }
};

Vue.directive('loading', {
    bind: function(el, binding, vnode) {     //只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。


      const vm = vnode.context;
      const mask = new Mask({
        el: document.createElement('div'),
      });
      el.instance = mask;
      console.log(el.instance) //el.instance实例的所有属性
      el.mask = mask.$el;
      el.maskStyle = {};

      binding.value && toggleLoading(el, binding);
    },

    update: function(el, binding) {     //所在组件的 VNode 更新时调用
     // el.instance.setText(el.getAttribute('element-loading-text'));
      if (binding.oldValue !== binding.value) {
        toggleLoading(el, binding);
      }
    },

    unbind: function(el, binding) {   //只调用一次，指令与元素解绑时调用。
      if (el.domInserted) {
        el.mask &&
        el.mask.parentNode &&
        el.mask.parentNode.removeChild(el.mask);
        toggleLoading(el, { value: false, modifiers: binding.modifiers });
      }
        el.instance && el.instance.$destroy();
    }
  });
}

export default loadingDirective;