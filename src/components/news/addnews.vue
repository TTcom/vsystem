<template>
  <div class="addnew">
     <el-row :gutter="20" style="margin-bottom: 10px;">
           <el-col :span="12">
               <span>消息name</span>
               <el-input v-model="name" placeholder="请输入内容"></el-input>
           </el-col>
           <el-col :span="12">
                <span>消息内容</span>
                <el-input v-model="content" placeholder="请输入内容"></el-input>
            </el-col>
     </el-row>
     <el-row>
            <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
         </el-select>
      </el-row>
      <el-row style="margin-top: 20px;">
            <el-col :span="6">
                <el-button type="primary"  size="small" @click="sure">保存</el-button>
            </el-col>
          </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
        content:"",
        name:'',
        value:"请选择",
        options: [{
            value: '选项1',
            label: '黄金糕'
        }]
    }
  },
  methods: {
    sure(){

    }
  },
}
</script>
<style lang="scss" scoped>
    .addnew{
        padding: 0 15px;
    }
</style>