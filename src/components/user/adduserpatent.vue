!<template>
  <div class="adduserpatent">
    <el-table :data="patentData" stripe border highlight-current-row
    @current-change="tablehandleCurrentChange" style="width: 100%;cursor: pointer;">
        <el-table-column type="index" label="序号" width="70">
        </el-table-column>
        <el-table-column prop="name" label="专利名称">
        </el-table-column>
        <el-table-column prop="agency" label="代理机构">
        </el-table-column>
        <el-table-column prop="agent" label="代理人">
        </el-table-column>
        <el-table-column prop="inventType" label="发明类型">
          <template slot-scope="{row}">
            {{ row.inventType == 1 ? "发明专利" : (row.inventType == 2 ? "授权发明" : (row.inventType == 3 ? '外观专利' : '实用新型')) }}
          </template>
        </el-table-column>
        <el-table-column prop="petitionNum" label="申请编号">
        </el-table-column>
        <el-table-column prop="petitionTime" label="申请日期">
                <template slot-scope="{row}">
                        {{ $fliterTime(row.petitionTime)}}
                </template>
        </el-table-column>
        <el-table-column prop="overtNum" label="公开编号">
        </el-table-column>
        <el-table-column prop="overtTime" label="公开日期">
        </el-table-column>
        <el-table-column prop="updateTime" label="updateTime">
                <template slot-scope="{row}">
                        {{ $fliterTime(row.updateTime)}}
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
          <el-pagination @current-change="handleCurrentChange" :page-size="pageSize" layout="total, prev, pager, next"
            :total="total">
          </el-pagination>
        </el-col>
      </el-row>
  </div>
</template>

<script>
    import Api from 'common/api/patent'
export default {
    
  data () {
    return {
        patentData: [],
          pageNum: 1,
          pageSize: 10,
          total: 15,
          currentRow: null
    }
  },
  created() {
        this.getpatentList();
  
      },
  methods: {
    tablehandleCurrentChange(val) {
        this.currentRow = val;
      },
    handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          this.pageNum = val;
          this.getpatentList();
  
        },
    getpatentList(name) {
          let params = {
            name:name,
            page: this.pageNum,
            pageSize: this.pageSize
          }
          Api.getpatentList(params).then(res => {
            console.log(res);
            this.patentData = res.data.data;
            this.total = res.data.totalSize;
          });
  
  
        },
  },
}
</script>
<style scoped>
</style>