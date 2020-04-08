<template>
  <div>
    <span style="font-size:17px;color:blue;" @click="nums">{{num}}</span>
  </div>
</template>

<script>
export default {
  name: 'BaseComponent',
  data(){
      return{
          num:"opper"
      }
  },
  methods: {
    nums(){
        console.log(213412412);
        this.$emit('nice')
    }
  },
  mounted(){
      console.log("span mounted",this.num)
  }
}
</script>