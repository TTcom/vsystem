<template>
  <div class="patent">
    <!-- <el-card style = "margin-bottom: 10px;">
        <el-form :model="selectmodel" :inline="true">
            <el-form-item label="消息标题">
              <el-input v-model="selectmodel.title" size="small"></el-input>
            </el-form-item>
            <div class="searchbtn">
              <el-button type="primary" size="small" @click="onsearch">搜索</el-button>  
              
            </div>
        </el-form>
      </el-card> -->
    <div style="margin-bottom: 10px;">
      <el-upload class="upload-demo" action="/downloadTemplate" :headers="header" :before-upload="beforeAvatarUpload" :show-file-list="false" @on-success="filesuccess" multiple>
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传csv文件</div>
      </el-upload>
    </div>

    <el-table
      :data="patentData"
      stripe
      border
      style="width: 100%;cursor: pointer;"
      v-loading="$isShowLoading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(255, 255, 255,0.8)"
    >
      <el-table-column type="index" label="序号" width="70"> </el-table-column>
      <el-table-column prop="name" label="专利名称"> </el-table-column>
      <el-table-column prop="agency" label="代理机构"> </el-table-column>
      <el-table-column prop="agent" label="代理人"> </el-table-column>
      <el-table-column prop="inventType" label="发明类型">
        <template slot-scope="{ row }">
          {{ row.inventType == 1 ? "发明专利" : row.inventType == 2 ? "授权发明" : row.inventType == 3 ? "外观专利" : "实用新型" }}
        </template>
      </el-table-column>
      <el-table-column prop="petitionNum" label="申请编号"> </el-table-column>
      <el-table-column prop="petitionTime" label="申请日期">
        <template slot-scope="{ row }">
          {{ $fliterTime(row.petitionTime) }}
        </template>
      </el-table-column>
      <el-table-column prop="overtNum" label="公开编号"> </el-table-column>
      <el-table-column prop="overtTime" label="公开日期"> </el-table-column>
      <el-table-column prop="updateTime" label="updateTime">
        <template slot-scope="{ row }">
          {{ $fliterTime(row.updateTime) }}
        </template>
      </el-table-column>
      <!-- <el-table-column prop="updateTime" label="操作">
          <template slot-scope="{row}">
                <span @click="deletmessage(row)" style="color: red;margin-right: 15px;">删除</span>
                <span @click="edit(row)" style="color:#66b1ff;">编辑</span>
          </template>
        </el-table-column> -->
    </el-table>
    <el-row>
      <el-col :span="24" style="text-align: right;background: white;">
        <el-pagination @current-change="handleCurrentChange" :page-size="pageSize" layout="total, prev, pager, next" :total="total"> </el-pagination>
      </el-col>
    </el-row>

    <!-- <el-drawer :title=title :visible.sync="drawer" :direction="direction" :size="size" :before-close="success">
          <Addnews @success="success" :isedit="isedit" :editId="editId" :obj="obj"></Addnews>
      </el-drawer> -->
  </div>
</template>
<script>
import Api from "common/api/patent"

export default {
  data() {
    return {
      title: "",
      obj: "",
      editId: "",
      isedit: false,
      selectmodel: {
        title: ""
      },
      size: "45%",
      userobj: {},
      dialogVisible: false,
      drawer: false,
      direction: "rtl",
      patentData: [],
      pageNum: 1,
      pageSize: 10,
      total: 15,
      header: {
        AccessToken: localStorage.getItem("vsys_token")
      }
    }
  },
  created() {
    this.getpatentList()
  },
  mounted() {},
  methods: {
    filesuccess() {
      this.$message.success("上传成功")
    },
    beforeAvatarUpload() {
      // const iscsv = file.type === 'csv';

      // if (!isJPG) {
      //   this.$message.error('上传文件只能是 csv 格式!');
      // }
      // return isJPG;
      return true
    },
    edit(row) {
      this.title = "修改消息"
      this.editId = row.id
      this.isedit = true
      this.obj = row
      this.drawer = true
    },
    deletmessage(row) {
      Api.deleteMessgeByCondition({ id: row.id }).then(res => {
        if (res.code == 0) {
          this.$message.success("删除成功")
          this.onsearch()
        }
      })
    },
    success() {
      this.drawer = false
      this.editId = ""
      this.isedit = false
      this.onsearch()
    },
    onsearch() {
      this.pageNum = 1
      this.getpatentList(this.selectmodel.title)
    },
    addnews() {
      this.title = "新建消息"
      this.drawer = true
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.pageNum = val
      this.getpatentList()
    },
    getpatentList(name) {
      let params = {
        name: name,
        page: this.pageNum,
        pageSize: this.pageSize
      }
      Api.getpatentList(params).then(res => {
        console.log(res)
        this.patentData = res.data.data
        this.total = res.data.totalSize
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
