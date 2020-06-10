<template>
    <div class="articleReportList">
        <el-card style="margin-bottom: 10px;">
            <el-table :data="articleData" style="width: 100%">
                <el-table-column prop="articleId" label="文章id">
                </el-table-column>
                <el-table-column prop="articleTitle" label="文章标题">
                </el-table-column>
                <el-table-column prop="commentId" label="评论id">
                </el-table-column>
                <el-table-column prop="commentContent" label="评论内容">
                </el-table-column>
                <el-table-column prop="reason" label="举报原因">
                </el-table-column>
                <el-table-column prop="creatorId" label="举报者id">
                </el-table-column>
                <el-table-column prop="creatorName" label="举报者用户名称">
                </el-table-column>
                <el-table-column prop="updateTime" label="更新时间">
                    <template slot-scope="{row}">
                        {{ $fliterTime(row.updateTime)}} 
                    </template>
                </el-table-column>
          <!-- <el-table-column prop="updateTime" label="操作">
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
               <span @click="examine(row)" style="color:#66b1ff;margin-right: 15px;cursor: pointer;">审核</span>
            </template>
          </el-table-column> -->
            </el-table>

            <el-row>
                <el-col :span="24" style="text-align: right;background: white;">
                    <el-pagination @current-change="handleCurrentChange" :page-size="pageSize"
                        layout="total, prev, pager, next" :total="total">
                    </el-pagination>
                </el-col>
            </el-row>

        </el-card>
        <!-- <el-dialog
            title="文章评论审核"
            :visible.sync="dialogVisible"
            width="40%"
            >
            <el-row>
            <el-form ref="form"  label-width="80px">
                    <el-form-item label="是否发布">
                            <el-radio v-model="iscroos" label="1">同意举报</el-radio>
                            <el-radio v-model="iscroos" label="2">待审核</el-radio>
                            <el-radio v-model="iscroos" label="3">驳回举报</el-radio>
                    </el-form-item>
                    <el-form-item label="审核原因" style="display: block;">
                            <el-input v-model="croosreason" placeholder="请输入内容" style="width: 100%;"></el-input>
                    </el-form-item>
                    

            </el-form>

        </el-row>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="sure">保存</el-button>
            </span>
            </el-dialog> -->
    </div>
</template>

<script>
    import Api from '@/common/api/article'
    export default {
        props: ['articleobj'],
        data() {
            return {
                croosreason:'',
                dialogVisible:false,
                iscroos:1,
                articleData: [],
                pageNum: 1,
                pageSize: 10,
                total: 0,
                examineid:'',
            }
        },
        methods: {
       

            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.pageNum = val;
                this.getarticleList();

            },
            getarticleList() {

                let params = {
                    articleId: this.articleobj.id,
                    commentId: this.reportid,
                    status:this.articleobj.status,
                    page: this.pageNum,
                    pageSize: this.pageSize
                }
                Api.queryArticleCommonReportListByCondition(params).then(res => {
                    console.log(res);
                    if (res.code == 0) {
                        this.articleData = res.data.data;
                    } else {
                        this.$message.error(res.msg)
                    }

                });


            },
        },
    }
</script>
<style scoped>
</style>