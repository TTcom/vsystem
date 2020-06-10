<template>
  <div class="someCollection">
    <div style="border-bottom:1px solid black">
      <el-button type="primary" @click="isCllose = !isCllose">向上飞出的卡片内容</el-button>
      <div class="onbox">
        <transition name="lazy-component">
          <div class="vbox" v-if="isCllose"></div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCllose: false
    }
  }
}
</script>

<style lang="scss" scoped>
.onbox {
  width: 300px;
  height: 500px;
  margin: auto;
  perspective: 500px;
}
.vbox {
  width: 300px;
  height: 200px;
  background-color: red;
}
.lazy-component-enter {
  //过渡的开始状态
  opacity: 0;
  margin-top: 200px;
  transform: scale(0.4) translateY(100%) rotateX(45deg);
}

.lazy-component-enter-to {
  //过渡的结束状态
  opacity: 1;
}

.lazy-component-enter-active {
  //过渡生效时的状态
  transition: all 0.5s;
  position: absolute;
  top: 0;
  width: 300px;
}

.lazy-component-leave {
  opacity: 1;
}

.lazy-component-leave-to {
  opacity: 0;
  margin-top: 200px;
  transform: scale(0.4) translateY(100%) rotateX(45deg);
}

.lazy-component-leave-active {
  transition: all 0.5s;
}
</style>
