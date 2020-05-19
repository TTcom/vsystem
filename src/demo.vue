<template>
  <div class="demo">
    <div style="height:300px;width:200px;border:1px solid black;" v-for="(item, i) in 5" :key="i">
      item
    </div>
    <div class="onbox" ref="onbox">
      <transition name="animation">
        <div class="vbox" v-if="isCllose"></div>
      </transition>
    </div>
    <el-button type="primary" @click="isCllose = !isCllose">主要按钮</el-button>
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {
      isCllose: false
    }
  },
  mounted() {
    var documentClientHeight = document.documentElement.clientHeight || window.innerHeight
    window.addEventListener("scroll", () => {
      //getBoundingClientRect()返回元素的大小及其相对于视口的位置。
      var vboxHeight = this.$refs.onbox.getBoundingClientRect().top
      if (vboxHeight + 50 <= documentClientHeight) {
        console.log(11)
        this.isCllose = true
      }
    })
    console.log(this.$refs.onbox.offsetTop)
    console.log(this.$refs.onbox.offsetHeight)
  }
}
</script>
<style lang="scss" scoped>
.onbox {
  width: 300px;
  height: 500px;
  margin: auto;
  perspective: 500px;
  overflow: hidden;
}
.vbox {
  width: 300px;
  height: 200px;
  background-color: red;
}
.animation-enter {
  //过渡的开始状态
  opacity: 0;
  margin-top: 200px;
  transform: scale(0.4) translateY(100%) rotateX(45deg);
}

.animation-enter-to {
  //过渡的结束状态
  opacity: 1;
}

.animation-enter-active {
  //过渡生效时的状态
  transition: all 0.5s;
  position: absolute;
  top: 0;
  width: 300px;
}

.animation-leave {
  opacity: 1;
}

.animation-leave-to {
  opacity: 0;
  margin-top: 200px;
  transform: scale(0.4) translateY(100%) rotateX(45deg);
}

.animation-leave-active {
  transition: all 0.5s;
}

.demo {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
