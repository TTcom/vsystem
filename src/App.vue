<template>
  <div id="app">
    <!-- <Rendertest></Rendertest> -->
    <!-- <dynamicComponent :name="name" :age="age" @onmmll="onmm" ></dynamicComponent> -->
    <!-- <router-view/> -->

    <!-- <funcComponent>
      <span @click="onmm">123456</span>
    </funcComponent>-->
    
  </div>
</template>
<script>
import dynamicComponent from "./views/dynamicComponent";
import funcComponent from "./views/funcComponent";

export default {
  components: {
    dynamicComponent,
    funcComponent
  },
  data() {
    return {
      isCllose:false,
      asdasdsa: 213,
      opp: "opppp",
      name: "jack",
      age: 12
    };
  },
  methods: {
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
.monday{
					overflow: hidden;
					transition: all .3s ease-in-out;
          font-size:16px;line-height:1.6;margin-top:25px;
				
			}
</style>
