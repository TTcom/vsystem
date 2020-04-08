<template>
  <div class="dynamic">
      <el-button type="primary" @click="handelclick">
            {{str}}
      </el-button>
  </div>  
</template>

<script>
import WrappedComponent from './WrappedComponent'
import Vue from 'vue';
let  picker = WrappedComponent;

export default {
    name:'dynamic',
    data(){
        return{
            str:"a test component string"
        }
    },
    methods:{
        handelclick(){
            console.log(this.$el);
            this.picker = new Vue(picker).$mount();
            console.log(this.picker);
            this.$el.appendChild(this.picker.$el);
            this.picker.$on('nice',this.donice)
        },
        donice(){
            console.log("donice");
        }
    }
}
</script>

<style>

</style>