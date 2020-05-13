<template>
  <transition name="fade">
    <div
      v-show="visible"
      class="el-loading-mask"
      :style="{ backgroundColor: background || '' }"
      :class="[customClass, { 'is-fullscreen': fullscreen }]"
    >
      <div class="el-loading-spinner">
        加载中。。。
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      text: null,
      spinner: null,
      background: null,
      fullscreen: true,
      visible: false,
      customClass: ""
    }
  },
  methods: {
    handleAfterLeave() {
      this.$emit("after-leave")
    },
    setText(text) {
      this.text = text
    }
  }
}
</script>
<style lang="scss">
.loadrelative {
  position: relative;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.el-loading-mask {
  position: absolute;
  z-index: 2000;
  background-color: hsla(0, 0%, 100%, 0.8);
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.3s;
}
</style>
