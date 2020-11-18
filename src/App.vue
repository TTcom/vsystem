<template>
  <div id="app">
    <!-- <div class="onbox">
      boxxxx
    </div> -->
    <!-- <Rendertest></Rendertest> -->
    <!-- <dynamicComponent :name="name" :age="age" @onmmll="onmm"></dynamicComponent> -->
    <!-- s<router-view /> -->

    <funcComponent>
      <span @click="onmm">123456</span>
    </funcComponent>
    <el-button type="default" @click="turnon">goon</el-button>
    <el-button type="danger" @click="turnoff">godestroy</el-button>
    <highcode :code="code" :language="language" />
    <!-- <div id="flip-list-demo" class="demo" style="font-size:18px;padding:0 20px;">
          <button v-on:click="shuffle">Shuffle</button>
          <transition-group name="flip-list" tag="ul">
            <li v-for="item in items" v-bind:key="item">{{ item }}</li>
          </transition-group>
    </div>-->
    <!-- <jump :title.sync="title"></jump> -->
  </div>
</template>
<script>
import Vue from "vue"
import funcComponent from "./views/funcComponent"
import dynamicComponent from "./views/dynamicComponent"
export default {
  components: {
    funcComponent
  },
  data() {
    return {
      title: "标题",
      isShow: true,
      asdasdsa: 213,
      opp: "opppp",
      name: "jack",
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      age: 12,
      code: "const a = b",
      language: "javascript"
    }
  },
  methods: {
    turnon() {
      this.picke = new Vue(dynamicComponent).$mount()
      console.log("picke", this.picke)
      this.$el.appendChild(this.picke.$el)
    },
    turnoff() {
      if (this.picke) {
        this.picke.$destroy()
        console.log("picke", this.picke)
      }
    },
    nowcheck() {
      console.log("nowcheck")
    },
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
  @include flex(row);
  width: 300px;
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
