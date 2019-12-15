<template>
	<div class="userdetail">
		<el-card class="box-card">
			<el-form ref="form" :model="userdetail" label-width="auto">
				<el-row>
					<el-col :span="12">
						<el-form-item label="姓名">
								{{userdetail.name}}
						</el-form-item>
					</el-col>
					<el-col :span="12">
							<el-form-item label="手机号">
									{{userdetail.mobile}}
							</el-form-item>
					</el-col>
					
				</el-row>
				<el-row>
						<el-col :span="12">
							<el-form-item label="邮箱">
									{{userdetail.email}}
							</el-form-item>
						</el-col>
						<el-col :span="12">
								<el-form-item label="性别">
										{{userdetail.sex == 1 ? "男" : "女"}}
								</el-form-item>
						</el-col>
						
					</el-row>
					<el-row>
						<el-col :span="12">
							<el-form-item label="图片1" class="forimg">
									<img :class="{img:userdetail.certBackUrl}" :src="userdetail.certBackUrl"/>
									<div class="policeimg" @click="topolice(userdetail.id)" v-if="userdetail.certBackUrl">
                                         <span>审核</span>
									</div>
									
							</el-form-item>
						</el-col>
						<el-col :span="12">
								<el-form-item label="图片2" class="forimg">
										<img  :class="{img:userdetail.certHandUrl}" :src="userdetail.certHandUrl"/>
										<div class="policeimg" @click="topolice(userdetail.id)" v-if="userdetail.certHandUrl">
                                         <span>审核</span>
									   </div>
								</el-form-item>
						</el-col>
						
					</el-row>
					<el-row>
						<el-col :span="12">
							<el-form-item label="图片3" class="forimg">
									<img :class="{img:userdetail.portraitImgUrl}" :src="userdetail.portraitImgUrl"/>
									<div class="policeimg" @click="topolice(userdetail.id)" v-if="userdetail.portraitImgUrl">
                                         <span>审核</span>
									</div>
							</el-form-item>
						</el-col>
						
					</el-row>
			</el-form>
		</el-card>
        <el-dialog
			title="用户身份认证审核"
			:visible.sync="dialogVisible"
			width="40%"
			:append-to-body="true"
			>
			<el-row>
			<el-form ref="form"  label-width="auto">
					<el-form-item label="认证状态">
							<el-radio v-model="iscroos" label="1">认证成功</el-radio>
							<el-radio v-model="iscroos" label="2">认证失败</el-radio>
					</el-form-item>
					<el-form-item label="认证结果原因" >
							<el-input v-model="noreason" placeholder="请输入认证结果原因"></el-input>
					</el-form-item>

			</el-form>

		</el-row>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" :loading="isonpolice" :disabled="isonpolice" @click="sure">{{isonpolice ? '审核中' : '确 定'}}</el-button>
			</span>
		</el-dialog>



	</div>
</template>

<script>
	import API from 'common/api/usermanner'
	export default {
		props: {
			userobj: {
				type: Object,
				default: ()=>{return {}}
			}
		},
		data(){
			return{
				dialogVisible:false,
				isonpolice:false,
				iscroos:'1',
				noreason:'',
				userdetail:{},
				policeid:''
			}
		},
		mounted(){
			this.getuserdetail(this.userobj.id);
		},
		methods: {
			sure(){

					 let params = {
							id:this.policeid,
							certStatus:this.iscroos,
							certReason:this.noreason
					 }
					 this.isonpolice = true;
					 API.policeuser(params).then(res=>{
						  console.log(res);
						  this.$message.success("审核成功");
						  this.policeid='';
						  this.noreason='';
						  this.dialogVisible= false;
					 }).finally(res=>{
						 this.isonpolice = false;
					 })

				  },
			topolice(id){
               
					this.dialogVisible= true;
					this.policeid = id
			},
			getuserdetail(userid){
				console.log(userid)
				API.getuserdetail({id:userid}).then(res=>{
					console.log(res);
					this.userdetail=res.data;
				})
			},




		},
	}
</script>

<style lang="scss">
 .userdetail{
	 padding: 0 10px;
 }
 .forimg{
	 position: relative;
	 overflow: hidden;
	 .img{
		 width: 188px;
		 height: 188px;
	 }
	 .el-form-item__content{
		    width: 188px;
			line-height: 0 !important;
		 }
	 margin-bottom:30px;
	 .policeimg{
		 position: absolute;
		 top:-188px;
         height: 188px;
		 width: 100%;
		 background: rgba(0,0,0,0.5);
		 color:white;
		 font-size: 15px;
		 text-align:center;
		 line-height: 188px;
		 cursor: pointer;
		 transition: all .3s;
	 }
	 .el-form-item__content:hover{
		 .policeimg{
			 top:0;
		 }
	 }
 }


</style>