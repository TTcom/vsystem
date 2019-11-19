<template>
	<div class="userdetail">
		<el-card class="box-card">
			<el-form ref="form" :model="userobj" label-width="auto">
				<el-row>
					<el-col :span="12">
						<el-form-item label="姓名">
								{{userobj.name}}
						</el-form-item>
					</el-col>
					<el-col :span="12">
							<el-form-item label="手机号">
									{{userobj.mobile}}
							</el-form-item>
					</el-col>
					
				</el-row>
				<el-row>
						<el-col :span="12">
							<el-form-item label="邮箱">
									{{userobj.email}}
							</el-form-item>
						</el-col>
						<el-col :span="12">
								<el-form-item label="性别">
										{{userobj.sex == 1 ? "男" : "女"}}
								</el-form-item>
						</el-col>
						
					</el-row>
			</el-form>
		</el-card>
	</div>
</template>

<script>
	export default {
		props: {
			userobj: {
				type: Object,
				default: ()=>{return {}}
			}
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss">
 .userdetail{
	 padding: 0 10px;
 }


</style>