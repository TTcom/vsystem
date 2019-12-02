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
								
								<quill-editor 
								class="editor"
								disabled
								ref="myQuillEditor" 
								:options="editorOption" 
								>
								</quill-editor>
							</el-form-item>
						</el-col>
					</el-row>
			</el-form>
		</el-card>
	</div>
</template>

<script>
	import { quillEditor } from "vue-quill-editor";
    import quill from 'quill'
	export default {
		props: {
			articleobj: {
				type: Object,
				default: ()=>{return {}}
			}
		},
		components: {
			quillEditor
		},
		watch: {
			articleobj:{
				handler(newval,oldval){
				
					console.log(newval,oldval);
				    this.insertcontent(newval)
				},
				immediate:true,
				deep:true
				
			}
		},
		data(){
			return{
				editorOption: {
				placeholder: "",
				theme: "bubble", // or 'bubble'
				placeholder: "",
				readOnly: true,
				modules: {
				  toolbar: ''
				}
			  }
			}
		},
		mounted() {
			let quillcontent = this.$refs.myQuillEditor.quill;
			
			if(!this.articleobj){
				return
			}else{
				try {
					JSON.parse(this.articleobj.content)
				} catch (error) {
					console.log(error);
					return false
				}
				quillcontent.setContents(JSON.parse(this.articleobj.content));
			}
			
		},
		methods: {
			insertcontent(newval){
				console.log(newval);
				if(!this.$refs.myQuillEditor) return;
				if(!newval) return;
				let quillcontent = this.$refs.myQuillEditor.quill;
				quillcontent.setContents([]);
				try {
					JSON.parse(newval.content)
				} catch (error) {
					console.log(error);
					return false
				}

				quillcontent.setContents(JSON.parse(newval.content));
				
			}
		},
	}
</script>

<style lang="scss">
 .articledetail{
	 padding: 0 10px;
 }


</style>