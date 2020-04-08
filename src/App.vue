<template>
  <div id="app">
    
    <!-- <Rendertest></Rendertest> -->
    <dynamicComponent></dynamicComponent>
    <!-- <router-view/> -->
  </div>
</template>
<script>
   import dynamicComponent from './views/dynamicComponent'


   export default{
         components:{
           dynamicComponent
         },
         data(){
           return{
              asdasdsa:213,
              opp:'opppp'
           }
         },
         methods:{
           handle(){
             console.log(123);
             
           }
         }
   }
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
</style>
