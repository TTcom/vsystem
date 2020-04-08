<template>
  <div class="dynamic">
      <el-button type="primary" @click="handelclick">
            {{str}} - name: {{name}} - age: {{age}}
      </el-button>
       <el-button type="info" @click="handelinfo">
            外面的大白杨
      </el-button>
      <el-button type="info" @click="onmm">
            外面的
      </el-button>
      <WrappedComponent v-bind="$props" v-on="$listeners" @onmmll="mkk"></WrappedComponent>
  </div>  
</template>

<script>
import WrappedComponent from './WrappedComponent'
import Vue from 'vue';
let  picker = WrappedComponent;

export default {
    name:'dynamic',
    props:['name','age'],
    components:{
        WrappedComponent
    },
    data(){
        return{
            str:"a test component string"
        }
    },
    mounted(){
        console.log('props',this.$props)
        console.log('attrs',this.$attrs)
    },
    methods:{
        mkk(){
             console.log('mkk');
        },
        onmm(){
            this.$emit('onmmll')
        },
        handelinfo(){
          this.picker.$destroy();  
          console.log(this.picker);
          const func = (date = '',visible = false)=>{
              console.log(date,visible);
          }
          func();
        },
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