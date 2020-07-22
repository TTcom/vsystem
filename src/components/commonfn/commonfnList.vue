<template>
  <div class="commonfnList">
    <el-button type="primary" @click="handle">防抖</el-button>
  </div>
</template>
<script>
import { debounced } from "@/common/utils/utils"
export default {
  name: "commonfnList",
  data() {
    return {
      msg: "msg"
    }
  },
  methods: {
    onDebounced: debounced(function(args) {
      //不可使用箭头函数，箭头函数的this不会指向vue实例
      console.log(this.msg)
      this.$message(args)
    }, 1000),
    handle() {
      this.onDebounced("防抖")
    }
  }
}
</script>
<style lang="scss" scoped></style>
