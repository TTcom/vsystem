<template>
	<div class="sign">
	  <transition name="fadeqa">
			<div class="container" v-show="isdata">
				 <h2>Welcome to the new world</h2> 
				 <div class="signinput">
					 <input type="text" placeholder="your name"  v-model="username">
				 </div>
				 <div class="signinput">
					 <input type="password" placeholder="your password" v-model="password">
				 </div>
				 <div class="signinput">
				 		  <el-button type="primary" @click="login">login</el-button>
				 </div>
				 
			</div>
		</transition>
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				isdata:false,
				username:"",
				password:""
			}
		},
		mounted(){
			setTimeout(()=>{
				this.isdata = true;
			},250)
		},
		methods:{
			login(){
				
			if(this.usertest()){
				
				this.$router.push('/main')
				
			}
			console.log("login");
				
			},
			usertest(){
				if(!this.username){
					this.$message({
					  showClose: true,
					  message: '用户名不可为空',
					  type: 'error'
					});
					return false;
				}
				if(!this.password){
						this.$message({
						  showClose: true,
						  message: '密码不可为空',
						  type: 'error'
						});
						return false;
					
				}
				
				return true;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.sign{
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		.container{
			position: relative;
			padding-bottom: 230px;
			height: 100px;
			transition: all .5s;
			top:0;
			text-align: center;
			width: 360px;
			h2{
				margin-bottom: 30px;
			}
			.signinput{
				input{
					height: 40px;
					background-color: white;
					width: 100%;
					box-sizing: border-box;
					border: 1px solid #d9d9d9;
					border-radius: 4px;
				}
				button{
					margin-top: 15px;
					width: 100%;
				}
				margin-bottom: 15px;
			
			}
			
		}
		.fadeqa-enter{
			 top:-15px;
		     opacity: 0
		}
		
	}
	
</style>
