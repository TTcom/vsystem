!<template>
  <div class="fileconfig">
    <el-row>
      <el-button @click="dialogVisible = true">专利类型</el-button>
      <el-upload
        class="upload-demo"
        action="/importPatentDataToElasticSearch"
        :headers="header"
        :before-upload="
          () => {
            this.isExportPatentes = true
          }
        "
        :show-file-list="false"
        @on-success="filesuccess"
        :disabled="isExportPatentes"
        multiple
        style="display:inline-block;margin-left: 10px;"
      >
        <el-button type="primary" :loading="isExportPatentes">专利信息批量导入es</el-button>
      </el-upload>
      <el-button type="success" style="margin-left: 10px;" @click="downPatentFile">下载专利导入文件模板</el-button>
      <el-button type="info" @click="downLawFile">下载法律状态文件模板</el-button>
      <el-upload
        class="upload-demo"
        action="/importLawStatusDataToElasticSearch"
        :headers="header"
        :before-upload="
          () => {
            this.isExportLawes = true
          }
        "
        :show-file-list="false"
        @on-success="filesuccess"
        multiple
        :disabled="isExportLawes"
        style="display:inline-block;margin-left: 10px;"
      >
        <el-button type="primary" :loading="isExportLawes">法律状态信息批量导入es</el-button>
      </el-upload>
    </el-row>
    <el-dialog title="专利类型设置" :visible.sync="dialogVisible" width="40%" @open="ondalogOpen">
      <el-row>
        <el-form ref="form" label-width="110px">
          <el-form-item label="当前专利类型">
            <span>{{ nowpatentType }}</span>
          </el-form-item>
          <el-form-item label="专利类型列表">
            <el-select v-model="selectType" placeholder="请选择">
              <el-option v-for="(item, index) in patentlist" :key="index" :label="item" :value="item"> </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" :loading="isonpatenttype" @click="sure">{{ isonpatenttype ? "发送中" : "确 定" }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Api from "common/api/fileconfig"
export default {
  data() {
    return {
      isExportPatentes: false,
      isExportLawes: false,
      selectType: "",
      patentlist: {},
      nowpatentType: "",
      isonpatenttype: false,
      dialogVisible: false,
      header: {
        AccessToken: localStorage.getItem("vsys_token")
      }
    }
  },
  methods: {
    downLawFile() {
      window.location.href = `http://221.224.123.197:50003/downloadLawStatusTemplate?AccessToken=${localStorage.getItem("vsys_token")}`
    },
    downPatentFile() {
      window.location.href = `http://221.224.123.197:50003/downloadPatentTemplate?AccessToken=${localStorage.getItem("vsys_token")}`
    },

    filesuccess() {
      this.$message.success("上传成功")
    },
    ondalogOpen() {
      this.getQueryImportPatentType()
      this.getQueryPatentTypeList()
    },
    getQueryPatentTypeList() {
      Api.getQueryPatentTypeList().then(res => {
        console.log("res", res)
        this.patentlist = res.data
      })
    },
    getQueryImportPatentType() {
      Api.getQueryImportPatentType().then(res => {
        console.log("tType", res)
        if (res.code == 0) {
          this.nowpatentType = res.data
        }
      })
    },
    sure() {
      console.log(this.selectType)
      if (!this.selectType && this.selectType != 0) {
        return
      }
      this.isonpatenttype = true
      Api.setImportPatentType({ patentType: this.selectType })
        .then(res => {
          console.log("selectType", res)
          if (res.code == 0) {
            this.$message.success("设置成功")
            this.dialogVisible = false
          }
        })
        .finally(() => {
          this.isonpatenttype = false
        })
    }
  }
}
</script>
<style scoped></style>
