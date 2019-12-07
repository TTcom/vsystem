!<template>
  <div class="articleCommentList">
        <el-card style="margin-bottom: 10px;">
                <el-table
                :data="articleData"
                style="width: 100%"
      
                >
                <el-table-column
              prop="id"
              label="id"
              >
			</el-table-column>
			<el-table-column
              prop="articleId"
              label="文章id"
              >
			</el-table-column>
			<el-table-column
              prop="commentContent"
              label="评论内容"
              >
			</el-table-column>
			
			
			<el-table-column
			  prop="creatorName"
			  label="创建者"
			  >
            </el-table-column>
            <el-table-column
			  prop="updateTime"
			  label="更新时间"
              >
              <template slot-scope="{row}">
                    {{ $fliterTime(row.updateTime)}}
                 </template>
            </el-table-column>
            <el-table-column prop="updateTime" label="操作">
                    <template slot-scope="{row}">
                        
                      <el-popconfirm
                        placement="top"
                        width="200"
                        type="danger"
                        title="将会删除该条目下所有数据，确定要删除吗？"
                        icon="el-icon-info"
                        iconColor="red"
                        @onConfirm="deletmessage(row)"
                      >
                         <span class="cur" slot="reference" style="color: red;margin-right: 15px;cursor: pointer;">删除</span> 
                      </el-popconfirm>
                       <!-- <span @click="edit(row)" style="color:#66b1ff;margin-right: 15px;">编辑</span>
                       <span @click="onsendMessage(row)" style="color:#66b1ff;">发送</span> -->
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
            
        </el-card>
  </div>
</template>

<script>
import Api from 'common/api/article'    
export default {
  props: ['articleobj'],
  data () {
    return {
        articleData:[],
        pageNum:1,
        pageSize:10,
        total:0,
    }
  },
  created(){
     this.getarticleList();
  },
  methods: {
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.pageNum = val;
        this.getarticleList();

    }, 
    deletmessage(row){
               console.log(row);
               Api.deleteArticleCommentByCondition({id:row.id}).then(res=>{
                    console.log(res);
                    if(res.code == 0){
                        this.$message.success('删除成功');
                        this.pageNum = 1;
                        this.getarticleList();
                       // this.$emit('success')
                    }
                    
                            
                });
    },
    getarticleList(){

        let params = {
            articleId:this.articleobj.id,
            page:this.pageNum,
            pageSize:this.pageSize
        }
        Api.queryArticleCommentListByCondition(params).then(res=>{
            console.log(res);
            this.articleData = res.data.data;
        });
        
        
    },
  },
}
</script>
<style scoped>
</style>