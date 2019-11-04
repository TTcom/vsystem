<template>
  <div class="userList">
        <el-table
            :data="userData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
  </div>
</template>
<script>
	import {getUserList} from 'common/api/usermanner'
	export default{
		data(){
			return{
				userData:[]
			}
		},
		created(){
			getUserList().then(res=>{
				console.log(res)
			})
		},
		methods:{
			
		}
	}
</script>
<style lang="scss"  scoped>
	
	
</style>
