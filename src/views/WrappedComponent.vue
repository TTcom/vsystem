<template>
  <div>
    <span style="font-size:17px;color:blue;" @click="nums">{{num}}</span>
    <el-button type="primary" @click="handeltree">
       有一棵树
      </el-button>
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
    handeltree(){
      console.log('a tree')
    },  
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