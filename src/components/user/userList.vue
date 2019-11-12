<template>
  <div class="userList">
        <el-table
            :data="userData"
            stripe
			border
            style="width: 100%">
			<el-table-column
			  type="index"
			  label="序号"
			  width="70">
			</el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              >
            </el-table-column>
			<el-table-column
			  prop="sex"
			  label="性别"
			  >
			  <template slot-scope="{row}">
				  {{row.sex == 1 ? '男' : '女'}}
			  </template>
			</el-table-column>
			<el-table-column
			  prop="id"
			  label="id"
			  >
			</el-table-column>
			<el-table-column
			  prop="email"
			  label="邮箱"
			  >
			</el-table-column>
          </el-table>
		  <el-row>
		  	<el-col :span="24" style="text-align: right;background: white;">
		  		<el-pagination
		  		      @size-change="handleSizeChange"
		  		      @current-change="handleCurrentChange"
		  		      :page-size="pageSize"
		  		      layout="total, prev, pager, next"
		  		      :total="total">
		  		    </el-pagination>
		  	</el-col>
		  </el-row>
  </div>
</template>
<script>
	import {getUserList} from 'common/api/usermanner'
	export default{
		data(){
			return{
				userData:[],
				pageNum:1,
				pageSize:10,
				total:15
			}
		},
		created(){
			let params = {
				page:this.pageNum,
				pageSize:this.pageSize
			}
			getUserList(params).then(res=>{
				console.log(res);
				this.userData = res.data.data
			})
		},
		methods:{
			  handleSizeChange(val) {
			        console.log(`每页 ${val} 条`);
			  },
			  handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			  }
		}
	}
</script>
<style lang="scss"  scoped>
	
	
</style>
