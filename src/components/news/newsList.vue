<template>
  <div class="articleList">
    <el-row style="margin-bottom: 20px;">
      <el-col :span="6">
        <el-button type="primary" size="small" @click="addnews">新建消息</el-button>
      </el-col>
    </el-row>
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
    </el-table>
    <el-row>
      <el-col :span="24" style="text-align: right;background: white;">
        <el-pagination @current-change="handleCurrentChange" :page-size="pageSize" layout="total, prev, pager, next"
          :total="total">
        </el-pagination>
      </el-col>
    </el-row>

    <el-drawer title="新建消息" :visible.sync="drawer" :direction="direction" :size="size">
        <Addnews></Addnews>
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
      addnews() {
        this.drawer = true
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);

        this.getUselist(val)

      },
      getnewsList() {
        let params = {
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