<template>
    <div class="patent">

        <!-- <el-card style = "margin-bottom: 10px;">
            <el-form :model="selectmodel" :inline="true">
                <el-form-item label="消息标题">
                  <el-input v-model="selectmodel.title" size="small"></el-input>
                </el-form-item>
                <div class="searchbtn">
                  <el-button type="primary" size="small" @click="onsearch">搜索</el-button>  
                  
                </div>
            </el-form>
          </el-card>
          <div style="margin-bottom: 10px;">
            <el-button type="primary" size="small" @click="addnews">新建消息</el-button>
          </div> -->

        <el-table :data="patentData" stripe border style="width: 100%;cursor: pointer;">
            <el-table-column type="index" label="序号" width="70">
            </el-table-column>
            <el-table-column prop="patentId" label="专利id">
            </el-table-column>
            <el-table-column prop="userId" label="用户id">
            </el-table-column>
            <el-table-column prop="patentName" label="专利名称">
            </el-table-column>
            <el-table-column prop="petitionNum" label="申请编号">
            </el-table-column>
            <el-table-column prop="overtNum" label="公开编号">
            </el-table-column>
            <el-table-column prop="petitioner" label="申请人">
            </el-table-column>
            <el-table-column prop="inventor" label="发明人">
            </el-table-column>
            <el-table-column prop="status" label="状态">
                <template slot-scope="{row}">
                    {{ row.status == 1 ? "审核通过" : (row.inventType == 3 ? "拒绝" : '待审核') }}
                </template>
            </el-table-column>
            <el-table-column prop="reason" label="审核原因">
            </el-table-column>
            
            <!-- <el-table-column prop="updateTime" label="操作">
              <template slot-scope="{row}">
                    <span @click="deletmessage(row)" style="color: red;margin-right: 15px;">删除</span>
                    <span @click="edit(row)" style="color:#66b1ff;">编辑</span>
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

        <!-- <el-drawer :title=title :visible.sync="drawer" :direction="direction" :size="size" :before-close="success">
              <Addnews @success="success" :isedit="isedit" :editId="editId" :obj="obj"></Addnews>
          </el-drawer> -->
    </div>
</template>
<script>
    import Api from 'common/api/patent'

    export default {

        data() {
            return {
                title: "",
                obj: '',
                editId: '',
                isedit: false,
                selectmodel: {
                    title: ''
                },
                size: "45%",
                userobj: {},
                dialogVisible: false,
                drawer: false,
                direction: 'rtl',
                patentData: [],
                pageNum: 1,
                pageSize: 10,
                total: 15
            }
        },
        created() {
            this.getpatentList();

        },
        mounted() {

        },
        methods: {
            edit(row) {
                this.title = "修改消息"
                this.editId = row.id;
                this.isedit = true;
                this.obj = row;
                this.drawer = true;
            },
            deletmessage(row) {
                Api.deleteMessgeByCondition({ id: row.id }).then(res => {
                    if (res.code == 0) {
                        this.$message.success("删除成功");
                        this.onsearch();
                    }
                })
            },
            success() {
                this.drawer = false;
                this.editId = '';
                this.isedit = false;
                this.onsearch();
            },
            onsearch() {

                this.pageNum = 1;
                this.getpatentList(this.selectmodel.title);


            },
            addnews() {
                this.title = "新建消息"
                this.drawer = true
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.pageNum = val;
                this.getpatentList();

            },
            getpatentList(name) {
                let params = {
                    name: name,
                    page: this.pageNum,
                    pageSize: this.pageSize
                }
                Api.getUserpatentList(params).then(res => {
                    console.log(res);
                    this.patentData = res.data.data;
                    this.total = res.data.totalSize;
                });


            },
        }
    }
</script>
<style lang="scss" scoped>


</style>