<template>
  <div class="article">
         <el-table
             ref="multipleTable"
             :data="tableData"
             tooltip-effect="dark"
             style="width: 100%"
             @selection-change="handleSelectionChange">
             <el-table-column
               type="selection"
               width="55">
             </el-table-column>
             <el-table-column
               label="日期"
               width="120">
               <template slot-scope="scope">{{ scope.row.date }}</template>
             </el-table-column>
             <el-table-column
               prop="name"
               label="姓名"
               width="120">
             </el-table-column>
             <el-table-column
               prop="address"
               label="地址"
               show-overflow-tooltip>
             </el-table-column>
           </el-table>
		   <div class="block text-right" style="margin-top: 10px;">
		       <el-pagination
		         @size-change="handleSizeChange"
		         @current-change="handleCurrentChange"
		         :current-page.sync="currentPage1"
		         :page-size="100"
		         layout="total, prev, pager, next"
		         :total="1000">
		       </el-pagination>
		     </div>
  </div>
</template>
<script>
	export default {
	    data() {
	      return {
			currentPage1: 5,
			currentPage2: 5,
			currentPage3: 5,
			currentPage4: 4,  
	        tableData: [{
	          date: '2016-05-03',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1518 弄'
	        }, {
	          date: '2016-05-02',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1518 弄'
	        }, {
	          date: '2016-05-04',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1518 弄'
	        }, {
	          date: '2016-05-01',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1518 弄'
	        }, {
	          date: '2016-05-08',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1518 弄'
	        }, {
	          date: '2016-05-06',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1518 弄'
	        }, {
	          date: '2016-05-07',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1518 弄'
	        }],
	        multipleSelection: []
	      }
	    },
	
	    methods: {
		  handleSizeChange(val) {
		  console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
		  console.log(`当前页: ${val}`);
		},
	      handleSelectionChange(val) {
	        this.multipleSelection = val;
	      }
	    }
	  }
</script>
<style lang="scss">
	.el-pagination{
		padding: 0;
	}
	
</style>
