<template>
  <div class="userList">
        <el-table
            :data="userData"
            stripe
			border
			@row-click="getuserdetail"
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
		  		      @current-change="handleCurrentChange"
		  		      :page-size="pageSize"
		  		      layout="total, prev, pager, next"
		  		      :total="total">
		  		    </el-pagination>
		  	</el-col>
		  </el-row>
		 <el-dialog
		   title="提示"
		   :visible.sync="dialogVisible"
		   width="30%"
		   :before-close="handleClose">
		   <span>这是一段信息</span>
		   <span slot="footer" class="dialog-footer">
		     <el-button @click="dialogVisible = false">取 消</el-button>
		     <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		   </span>
		 </el-dialog>
		  <el-drawer
		    title="我是标题"
		    :visible.sync="drawer"
		    :direction="direction"
		    :before-close="handleClose">
		    <span>我来啦!</span>
		  </el-drawer>
  </div>
</template>
<script>
	import {getUserList} from 'common/api/usermanner'
	//import { MessageBox } from 'element-ui'
	export default{
		data(){
			return{
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
		methods:{
			 handleClose(done) {
			        this.$confirm('确认关闭？')
			          .then(_ => {
			            console.log(34234)
			          })
			          .catch(_ => {});
			      },
			getuserdetail(row){
				console.log(row);
				this.dialogVisible = true
				
				
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
				  	this.total = res.data.totalPage * this.pageSize;
				  });
				  
				  
			  },
		}
	}
</script>
<style lang="scss"  scoped>
	
	
</style>
