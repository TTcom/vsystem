<template>
  <div class="userList">
        <el-table
            :data="userData"
            stripe
			border
			@row-click="getuserdetail"
            style="width: 100%;cursor: pointer;">
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
              prop="account"
              label="账号"
              >
			</el-table-column>
			<el-table-column
              prop="loginDate"
              label="最近登录时间"
              >
			</el-table-column>
			<el-table-column
              prop="certStatus"
              label="认证状态"
			  >
			  <template slot-scope="{row}">
				{{ row.certStatus == 1 ? '已认证' : row.certStatus == 2 ? "认证失败" : "未认证" }}
			  </template>
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
			  prop="email"
			  label="邮箱"
			  >
			</el-table-column>
          </el-table>
		  <el-row>
		  	<el-col :span="24" style="text-align: right;background: white;">
		  		<el-pagination
		  		      @current-change="handleCurrentChange"
		  		      :page-size="pageSize"
		  		      layout="total, prev, pager, next"
		  		      :total="total">
		  		    </el-pagination>
		  	</el-col>
		  </el-row>

		  <el-drawer
		    title="用户详情"
		    :visible.sync="drawer"
			:direction="direction"
			:size="size"
		    >
		    <Userdetail :userobj="userobj"></Userdetail>
		  </el-drawer>
  </div>
</template>
<script>
	import {getUserList} from 'common/api/usermanner'
    import Userdetail from 'components/user/userdetail'
	export default{
		components:{
			Userdetail
		},
		data(){
			return{
				size:"45%",
				userobj:{},
				dialogVisible: false,
				drawer: false,
				direction: 'rtl',
				userData:[],
				pageNum:1,
				pageSize:10,
				total:15
			}
		},
		created(){
			this.getUselist(this.pageNum)
		},
		mounted() {
		
		},
		methods:{
			 
			getuserdetail(row){
				console.log(row);
				this.userobj = row;
				this.drawer = true
				
				
				// MessageBox.confirm(`Do you really want to delete ${row.name} ?`,
				//         "Confirmation",
				//         {
				//           confirmButtonText: "OK",
				//           cancelButtonText: "Cancel",
				//           type: "warning"
				//         })
			},
			  handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
				
				this.getUselist(val)
				
			  },
			  getUselist(pageNum){
				  let params = {
				  	page:pageNum,
				  	pageSize:this.pageSize
				  }
				  getUserList(params).then(res=>{
				  	console.log(res);
				  	this.userData = res.data.data;
				  	this.total = res.data.totalSize;
				  });
				  
				  
			  },
		}
	}
</script>
<style lang="scss"  scoped>
	
	
</style>
