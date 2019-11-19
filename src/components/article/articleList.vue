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
					prop="createTime"
					label="创建时间"
					>
				  </el-table-column>
				  <el-table-column
					prop="creatorName"
					label="创建人"
					>
				  </el-table-column>
				  <el-table-column
					label="是否发布"
					>
					<template slot-scope="{row}">
						{{row.isPublish == 1 ? '已发布' : row.isPublish == 2 ? '审核拒绝' : '未发布' }}
					</template>
				  </el-table-column>
				  <el-table-column
					prop="id"
					label="id"
					>
				  </el-table-column>
				  <el-table-column
					prop="reason"
					label="审核原因"
					>
				  </el-table-column>
				  <el-table-column
					label="状态"
					>
					<template slot-scope="{row}">
						{{row.isPublish == 1 ? '正常' : '删除' }}
					</template>
				  </el-table-column>
				  <el-table-column
					prop="title"
					label="title"
					>
				  </el-table-column>
				  <el-table-column
					label="操作"
					>
					<template slot-scope="{row}">
							<span  style="color:#545eda;" @click.stop="onpolice(row)">审核</span>
					</template>
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
					title="文章审核"
					:visible.sync="dialogVisible"
					width="40%"
					>
					<el-row>
					<el-form ref="form"  label-width="auto">
							<el-form-item label="是否发布">
									<el-radio v-model="iscroos" label="1">审核成功</el-radio>
                                    <el-radio v-model="iscroos" label="2">拒绝发布</el-radio>
							</el-form-item>
                            <el-form-item label="拒绝原因" v-if="iscroos=='2'">
									<el-input v-model="noreason" placeholder="请输入内容"></el-input>
							</el-form-item>

					</el-form>

				</el-row>
					<span slot="footer" class="dialog-footer">
						<el-button @click="dialogVisible = false">取 消</el-button>
						<el-button type="primary" :loading="isonpolice" :disabled="isonpolice" @click="sure">{{isonpolice ? '审核中' : '确 定'}}</el-button>
					</span>
					</el-dialog>
				<el-drawer
				  title="文章详情"
				  :visible.sync="drawer"
				  :direction="direction"
				  :size="size"
				  >
				  <Articledetail :articleobj = "articleobj"></Articledetail>
				</el-drawer>
		</div>
	  </template>
	  <script>
		  import Api from 'common/api/article'
		  import Articledetail from './articledetail'
		  export default{
			  components:{
				Articledetail
			  },
			  data(){
				  return{
					  isonpolice:false,
					  iscroos:'1',
					  noreason:'',
					  dialogVisible:false,
					  size:"80%",
					  userobj:{},
					  dialogVisible: false,
					  drawer: false,
					  direction: 'rtl',
					  articleData:[],
					  pageNum:1,
					  pageSize:10,
					  total:15,
					  articleobj:''
				  }
			  },
			  created(){
				  this.getarticleList(this.pageNum)
			  },
			  mounted() {
			  
			  },
			  methods:{
				  onpolice(row){
					  console.log("row",row)
					this.dialogVisible= true;
					this.policeid = row.id
				  },
				  sure(){
					 console.log(this.iscroos,);
					 if(this.iscroos=="2" && !this.noreason){
						 this.$message.error("原因不可为空")
						  return;
					 }
					 let params = {
							id:this.policeid,
							isPublish:this.iscroos,
							reason:this.noreason
					 }
					 this.isonpolice = true;
					 Api.policearticle(params).then(res=>{
						  console.log(res);
						  this.$message.success("审核成功");
						  this.isonpolice = false;
						  this.policeid='';
						  this.noreason='';
						  this.dialogVisible= false;
					 })

				  },
				  getuserdetail(row){
					  console.log(row);
					  this.articleobj = row;
					  this.drawer = true
					  
					  
				  },
					handleCurrentChange(val) {
					  console.log(`当前页: ${val}`);
					  this.pageNum = val;
					  this.getarticleList();

					  
					},
					getarticleList(){
						let params = {
							page:this.pageNum,
							pageSize:this.pageSize
						}
						Api.getarticleList(params).then(res=>{
							console.log(res);
							this.articleData = res.data.data;
							this.total = res.data.totalSize;
						});
						
						
					},
			  }
		  }
	  </script>
	  <style lang="scss"  scoped>
		  
		  
	  </style>
	  