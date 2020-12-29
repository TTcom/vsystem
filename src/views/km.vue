<template>
  <div class="main">
      
   <v-selecttop @showAnaly="showAnaly"></v-selecttop>

  </div>
</template>

<script>
export default {
    methods:{
        showAnaly(index,data){
            console.log(index,data)
        }
    },
  data() {
    return {
        showindex:0
    }
  },
}
</script>

<style scoped lang="scss">

</style>
