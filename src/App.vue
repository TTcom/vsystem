<template>
  <div id="app">
    <!-- <Rendertest></Rendertest> -->
    <!-- <dynamicComponent :name="name" :age="age" @onmmll="onmm" ></dynamicComponent> -->
    <!-- <router-view/> -->

    <!-- <funcComponent>
      <span @click="onmm">123456</span>
    </funcComponent>-->

    <!-- <div id="flip-list-demo" class="demo" style="font-size:18px;padding:0 20px;">
          <button v-on:click="shuffle">Shuffle</button>
          <transition-group name="flip-list" tag="ul">
            <li v-for="item in items" v-bind:key="item">{{ item }}</li>
          </transition-group>
    </div>-->
    <div class="onbox">
          <transition name="bounce">
          <div class="vbox">
          </div>
           </transition>
    </div>
    <el-button type="primary" @click="isCllose = !isCllose">主要按钮</el-button>
  </div>
</template>
<script>
import dynamicComponent from "./views/dynamicComponent";
import funcComponent from "./views/funcComponent";
import _ from "lodash";

export default {
  components: {
    dynamicComponent,
    funcComponent
  },
  data() {
    return {
      isShow:true,
      isCllose: false,
      asdasdsa: 213,
      opp: "opppp",
      name: "jack",
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      age: 12
    }
  },
  created(){
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
      let a = this.items[3];
      let b = this.items[2];
      this.items[2] = a;
      this.items[3] = b;
      console.log(this.items);
      this.items = this.items.slice();
    },
    onmm() {
      console.log("omm");
    },
    handle() {
      console.log(123);
    }
  }
};
// import Rendertest from './views/rendertest.vue'
// export default{
//        components:{n[m]
//         Rendertest
//        }
// }
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  position: relative;
}
.monday {
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  font-size: 16px;
  line-height: 1.6;
  margin-top: 25px;
}
.onbox{
  height: 300px;
  border: 1px solid;
  width: 500px;
  position: relative;
  overflow: hidden;
  
}
.vbox{
  transition: all .5s;
  height: 100px;
  width: 100px;
  background-color: lightblue;
  position: absolute;
  left: 50%;
  bottom:0px;
  transform: rotateX(45deg);
  // perspective-origin:50% center

}

// .bounce-enter-active {
//   animation: bounce-in .5s;
// }
// .bounce-leave-active {
//   animation: bounce-in .5s reverse;
// }
// @keyframes bounce-in {
//   0% {
//     transform: scale(0);
//     bottom:-100px;
//   }
//   50% {
//     transform: scale(1.5);
//      bottom:-50px;
//   }
//   100% {
//      transform: scale(1);
//      bottom:0px;
//   }
// }


</style>
