<template>
  <div id="app">
    <!-- <Rendertest></Rendertest> -->
    <!-- <dynamicComponent :name="name" :age="age" @onmmll="onmm" ></dynamicComponent> -->
    <router-view />

    <!-- <funcComponent>
      <span @click="onmm">123456</span>
    </funcComponent>-->

    <!-- <div id="flip-list-demo" class="demo" style="font-size:18px;padding:0 20px;">
          <button v-on:click="shuffle">Shuffle</button>
          <transition-group name="flip-list" tag="ul">
            <li v-for="item in items" v-bind:key="item">{{ item }}</li>
          </transition-group>
    </div>-->
    <!-- <div class="onbox">
          <transition name="lazy-component">
          <div class="vbox" v-if="isCllose">
          </div>
           </transition>
    </div>
    <el-button type="primary" @click="isCllose = !isCllose">主要按钮</el-button> -->
  </div>
</template>
<script>
//import dynamicComponent from "./views/dynamicComponent"
//import funcComponent from "./views/funcComponent"
export default {
  components: {
    // dynamicComponent,
    // funcComponent
  },
  data() {
    return {
      isShow: true,
      isCllose: false,
      asdasdsa: 213,
      opp: "opppp",
      name: "jack",
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      age: 12
    }
  },
  created() {
    console.log(process.env.VUE_APP_API_URL)
  },
  // beforeMount(){
  //    console.log("beforeMount father")
  // },
  // mounted(){
  //    console.log("mounted father")
  // },
  methods: {
    shuffle() {
      // this.items = _.shuffle(this.items);
      let a = this.items[3]
      let b = this.items[2]
      this.items[2] = a
      this.items[3] = b
      console.log(this.items)
      this.items = this.items.slice()
    },
    onmm() {
      console.log("omm")
    },
    handle() {
      console.log(123)
    }
  }
}
// import Rendertest from './views/rendertest.vue'
// export default{
//         Rendertest
//        }
// }
</script>
<style lang="scss">
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

#app {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
