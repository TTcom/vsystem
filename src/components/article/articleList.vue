<template>
		<div class="articleList">
			  <el-table
				  :data="articleData"
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
					label="文章标题"
					>
				  </el-table-column>
				  <el-table-column
					prop="sex"
					label="上传时间"
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
					label="更新时间"
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
	  
				<!-- <el-drawer
				  title="用户详情"
				  :visible.sync="drawer"
				  :direction="direction"
				  :size="size"
				  >
				  <Userdetail :userobj="userobj"></Userdetail>
				</el-drawer> -->
		</div>
	  </template>
	  <script>
		  import {getarticleList} from 'common/api/article'
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
					  articleData:[],
					  pageNum:1,
					  pageSize:10,
					  total:15
				  }
			  },
			  created(){
				  this.getarticleList(this.pageNum)
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
					getarticleList(pageNum){
						let params = {
							title:'',
							isPublish:'',
							page:this.pageNum,
							creatorName:'',
							pageSize:this.pageSize
						}
						getarticleList(params).then(res=>{
							console.log(res);
							// this.userData = res.data.data;
							// this.total = res.data.totalSize;
						});
						
						
					},
			  }
		  }
	  </script>
	  <style lang="scss"  scoped>
		  
		  
	  </style>
	  