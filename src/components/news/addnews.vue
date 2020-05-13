<template>
  <div class="addnew">
    <el-card style="margin-bottom: 10px;">
      <el-form :model="model" :inline="true" ref="ruleForm">
        <el-form-item
          label="消息名称"
          prop="name"
          :rules="[{ required: true, message: '请输入消息名称', trigger: 'blur' }]"
        >
          <el-input v-model="model.name" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item
          label="消息内容"
          prop="content"
          :rules="[{ required: true, message: '请输入内容', trigger: 'blur' }]"
        >
          <el-input v-model="model.content" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item
          label="消息类型"
          prop="type"
          :rules="[{ required: true, message: '请选择消息类型', trigger: 'blur' }]"
        >
          <el-select v-model="model.type" placeholder="请选择" clearable>
            <el-option label="系统通知" value="1"> </el-option>
            <el-option label="用户通知" value="2"> </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div style="margin:10px 0">
        <el-button type="primary" size="small" @click="add">保存</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import Api from "common/api/news"
import cloneDeep from "lodash/cloneDeep"
export default {
  props: ["isedit", "editId", "obj"],
  data() {
    return {
      model: {
        name: "",
        content: "",
        type: ""
      }
    }
  },
  watch: {
    isedit: {
      handler(newval) {
        if (newval) {
          this.model = cloneDeep(this.obj) // 把父组件传递的属性拷贝
        } else {
          this.model = {
            name: "",
            content: "",
            type: ""
          }
        }
        if (this.$refs["ruleForm"]) {
          this.$refs["ruleForm"].resetFields()
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    add() {
      this.$refs["ruleForm"].validate(async valid => {
        if (valid) {
          const { code, msg } = this.isedit
            ? await Api.updateMessgeByCondition(this.model)
            : await Api.createMessge(this.model)
          if (code == 0) {
            this.$message.success("保存成功")
            this.model = {
              name: "",
              content: "",
              type: ""
            }
            this.$emit("success")
          } else {
            this.$message.error(msg)
          }
        } else {
          console.log("error submit!!")
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.addnew {
  padding: 0 15px;
}
</style>
