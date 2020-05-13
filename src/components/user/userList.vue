<template>
  <div class="userList">
    <div>
      <el-form :model="selectmodel" :inline="true">
        <el-card style="margin-bottom: 10px;">
          <el-form-item label="认证状态">
            <el-select v-model="selectmodel.status" placeholder="请选择" clearable>
              <el-option label="全部" value=""> </el-option>
              <el-option label="已认证" value="1"> </el-option>
              <el-option label="认证失败" value="2"> </el-option>
              <el-option label="未认证" value="3"> </el-option>
            </el-select>
          </el-form-item>
          <div class="searchbtn">
            <el-button type="primary" size="small" @click="onsearch">搜索</el-button>
          </div>
        </el-card>
      </el-form>
    </div>
    <el-table
      :data="userData"
      stripe
      border
      @row-click="getuserdetail"
      style="width: 100%;cursor: pointer;"
      v-loading="$isShowLoading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(255, 255, 255,0.8)"
    >
      <el-table-column type="index" label="序号" width="70"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="account" label="账号"> </el-table-column>
      <el-table-column prop="loginDate" label="最近登录时间"> </el-table-column>
      <el-table-column prop="certStatus" label="认证状态">
        <template slot-scope="{ row }">
          {{ row.certStatus == 1 ? "已认证" : row.certStatus == 2 ? "认证失败" : "未认证" }}
        </template>
      </el-table-column>
      <el-table-column prop="sex" label="性别">
        <template slot-scope="{ row }">
          {{ row.sex == 1 ? "男" : "女" }}
        </template>
      </el-table-column>
      <el-table-column prop="email" label="邮箱"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="{ row }">
          <span style="color:#545eda;" @click.stop="addpatent(row)">增加专利</span>
        </template>
      </el-table-column>
    </el-table>
    <el-row>
      <el-col :span="24" style="text-align: right;background: white;">
        <el-pagination
          @current-change="handleCurrentChange"
          :page-size="pageSize"
          layout="total, prev, pager, next"
          :total="total"
        >
        </el-pagination>
      </el-col>
    </el-row>

    <el-drawer
      :title="title"
      :visible.sync="drawer"
      :direction="direction"
      :size="size"
      @closed="success"
    >
      <component :is="cpn" :userobj="userobj"></component>
    </el-drawer>
  </div>
</template>
<script>
import API from "common/api/usermanner"
import Userdetail from "./userdetail"
import Adduserpatent from "./adduserpatent"
export default {
  components: {
    Userdetail,
    Adduserpatent
  },
  data() {
    return {
      title: "",
      cpn: "",
      size: "45%",
      userobj: {},
      dialogVisible: false,
      drawer: false,
      direction: "rtl",
      userData: [],
      pageNum: 1,
      pageSize: 10,
      total: 15,
      selectmodel: {
        status: ""
      }
    }
  },
  created() {
    this.getUselist()
  },
  mounted() {},
  methods: {
    onsearch() {
      this.pageNum = 1
      this.getUselist(this.selectmodel.status)
    },
    success() {
      console.log(123)
      ;(this.cpn = ""), (this.drawer = false)
    },
    addpatent(row) {
      this.title = "增加用户专利"
      this.size = "60%"
      this.userobj = row
      this.drawer = true
      this.cpn = "Adduserpatent"
    },
    getuserdetail(row) {
      console.log(row)
      this.size = "45%"
      this.title = "用户详情"
      this.userobj = row
      this.drawer = true
      this.cpn = "Userdetail"
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.pageNum = val
      this.getUselist()
    },
    getUselist(status) {
      let params = {
        certStatus: status,
        page: this.pageNum,
        pageSize: this.pageSize
      }
      API.getUserList(params).then(res => {
        console.log(res)
        this.userData = res.data.data
        this.total = res.data.totalSize
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
