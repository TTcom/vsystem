!<template>
  <div class="sendMessage">
        <el-card style="margin-bottom: 10px;">
                <el-table
                :data="userData"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                >
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
              prop="name"
              label="姓名"
              >
			</el-table-column>
			<el-table-column
              prop="account"
              label="账号"
              >
			</el-table-column>
			<el-table-column
              prop="loginDate"
              label="最近登录时间"
              >
			</el-table-column>
			<el-table-column
              prop="certStatus"
              label="认证状态"
			  >
			  <template slot-scope="{row}">
				{{ row.certStatus == 1 ? '已认证' : row.certStatus == 2 ? "认证失败" : "未认证" }}
			  </template>
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
            <div style="margin:10px 0">
                <el-button type="primary" size="small" @click="add">发送</el-button>
                <span style="margin: 0 15px;">是否全部</span>
                <el-select v-model="isall" placeholder="请选择" clearable>
                        <el-option
                            key="0"
                            label="是"
                            value='true'>
                    </el-option>
                    <el-option
                        key="1"
                        label="否"
                        value='false'>
                    </el-option>
                </el-select>
            </div>
        </el-card>
  </div>
</template>

<script>
import APIONuser from 'common/api/usermanner'
import APIONnews from 'common/api/news'
export default {
  props:['obj'],
  data () {
    return {
        isall:'true',
        multipleSelection: [],
        userData:[],
        pageNum:1,
        pageSize:8,
        total:15
    }
  },
  created(){
			this.getUselist(this.pageNum)
	},
  methods: {
      add(){
        let useridarr = this.multipleSelection.map(value=>{
            return value.id;
        })
        console.log(useridarr)
        let params = {
            userIds:useridarr,
            messageId:this.obj.id,
            isAll:this.isall

        }
        APIONnews.sendMessge(params).then(res=>{
            console.log(res);
            if(res.code == 0){
                this.$message.success('发送成功');
                this.$emit('success')
            }
            
				  	
		});


      },
      handleSelectionChange(val) {
         this.multipleSelection = val;
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
				  APIONuser.getUserList(params).then(res=>{
				  	console.log(res);
				  	this.userData = res.data.data;
				  	this.total = res.data.totalSize;
				  });
				  
				  
	  },
      
  },
}
</script>
<style scoped>
</style>