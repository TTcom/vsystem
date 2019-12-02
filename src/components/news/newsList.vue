<template>
  <div class="articleList">
    <el-row style="margin-bottom: 20px;">
      <el-col :span="6">
        
      </el-col>
    </el-row>
    <el-card style = "margin-bottom: 10px;">
      <el-form :model="selectmodel" :inline="true">
          <el-form-item label="消息标题">
            <el-input v-model="selectmodel.title" size="small"></el-input>
          </el-form-item>
          <div class="searchbtn">
            <el-button type="primary" size="small" @click="onsearch">搜索</el-button>  
            
          </div>
      </el-form>
    </el-card>
    <div style="margin-bottom: 10px;">
      <el-button type="primary" size="small" @click="addnews">新建消息</el-button>
    </div>
    
    <el-table :data="newsData" stripe border style="width: 100%;cursor: pointer;">
      <el-table-column type="index" label="序号" width="70">
      </el-table-column>
      <el-table-column prop="name" label="消息名称">
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间">
      </el-table-column>
      <el-table-column prop="content" label="消息内同">
      </el-table-column>
      <el-table-column prop="type" label="通知">
        <template slot-scope="{row}">
          {{ row.type == 1 ? "系统通知" : "用户通知" }}
        </template>
      </el-table-column>
      <el-table-column prop="id" label="id">
      </el-table-column>
      <el-table-column prop="updateTime" label="更新时间">
      </el-table-column>
      <el-table-column prop="updateTime" label="操作">
        <template slot-scope="{row}">
              <span @click="deletmessage(row)" style="color: red;margin-right: 15px;">删除</span>
              <span @click="edit(row)" style="color:#66b1ff;">编辑</span>
        </template>
      </el-table-column>
    </el-table>
    <el-row>
      <el-col :span="24" style="text-align: right;background: white;">
        <el-pagination @current-change="handleCurrentChange" :page-size="pageSize" layout="total, prev, pager, next"
          :total="total">
        </el-pagination>
      </el-col>
    </el-row>

    <el-drawer :title=title :visible.sync="drawer" :direction="direction" :size="size" :before-close="success">
        <Addnews @success="success" :isedit="isedit" :editId="editId" :obj="obj"></Addnews>
    </el-drawer>
  </div>
</template>
<script>
  import Api from 'common/api/news'
  import Addnews from './addnews.vue'
  export default {
    components: {
      Addnews
    },
    data() {
      return {
        title:"",
        obj:'',
        editId:'',
        isedit:false,
        selectmodel:{
          title:''
        },
        size: "45%",
        userobj: {},
        dialogVisible: false,
        drawer: false,
        direction: 'rtl',
        newsData: [],
        pageNum: 1,
        pageSize: 10,
        total: 15
      }
    },
    created() {
      this.getnewsList();

    },
    mounted() {

    },
    methods: {
      edit(row){
            this.title="修改消息"
            this.editId = row.id;
            this.isedit = true;
            this.obj=row;
            this.drawer = true;
      },
      deletmessage(row){
        Api.deleteMessgeByCondition({id:row.id}).then(res=>{
          if(res.code == 0){
            this.$message.success("删除成功");
            this.onsearch();
          }
        }) 
      },
      success(){
        this.drawer = false;
        this.editId = '';
        this.isedit = false;
        this.onsearch();
      },
      onsearch(){
         
        this.pageNum = 1;
        this.getnewsList(this.selectmodel.title);


      },
      addnews() {
        this.title="新建消息"
        this.drawer = true
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.pageNum = val;
        this.getnewsList();

      },
      getnewsList(name) {
        let params = {
          name:name,
          page: this.pageNum,
          pageSize: this.pageSize
        }
        Api.getnewsList(params).then(res => {
          console.log(res);
          this.newsData = res.data.data;
          this.total = res.data.totalSize;
        });


      },
    }
  }
</script>
<style lang="scss" scoped>


</style>