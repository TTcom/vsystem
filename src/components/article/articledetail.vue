<template>
	<div class="articledetail">
		<el-card class="box-card">
			<el-form ref="form" :model="articleobj" label-width="auto">
				<el-row>
					<el-col :span="12">
						<el-form-item label="创建时间">
								{{articleobj.createTime}}
						</el-form-item>
					</el-col>
					<el-col :span="12">
							<el-form-item label="创建人">
									{{articleobj.creatorName}}
							</el-form-item>
					</el-col>
					
				</el-row>
				<el-row>
						<el-col :span="12">
							<el-form-item label="是否发布">
                                {{articleobj.isPublish == 1 ? '已发布' : articleobj.isPublish == 2 ? '审核拒绝' : '未发布' }}
							</el-form-item>
						</el-col>
						<el-col :span="12">
								<el-form-item label="审核原因">
                                  <span v-if="articleobj.reason">{{articleobj.reason}}</span>  
								</el-form-item>
						</el-col>
						
                    </el-row>
                    <el-row>
						<el-col :span="12">
							<el-form-item label="状态">
                                {{articleobj.isPublish == 1 ? '正常' : '删除' }}
							</el-form-item>
						</el-col>
                    </el-row>
                    <el-row>
						<el-col :span="24">
							<el-form-item label="文章简介">
                                {{articleobj.summary}}
							</el-form-item>
						</el-col>
                    </el-row>
                    <el-row>
						<el-col :span="24">
							<el-form-item label="文章内容">
                                {{articleobj.content}}
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
			articleobj: {
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
 .articledetail{
	 padding: 0 10px;
 }


</style>