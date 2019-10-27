<template>
  <div class="onrightTitle">
         
			 <div class="headertop">
				 <el-breadcrumb separator="/">
				   <el-breadcrumb-item>首页</el-breadcrumb-item>
				   <el-breadcrumb-item>{{breadContent}}</el-breadcrumb-item>
				 </el-breadcrumb>
			 </div>
			 <div class="headerbottom">
				 <span class="headerimg">
					 <img src="../common/img/txicon.svg"  />
				 </span>
				 <span class="greet veralimiddle">
					 {{greetcontent}}
				 </span>
				 
			 </div>
			 
			 
		 
  </div>
</template>
<script>
	export default{
		data(){
			return{
				breadContent:"人员管理",
				greetcontent:"",
				greetText:[
					{text:"早上好，Jarvis，用力呼吸新的空气，开始美好的一天吧！"},
					{text:"上午好，Jarvis，开始用行动证明自己吧！"},
					{text:"中午好，Jarvis，累了就睡会儿吧！"},
					{text:"下午好，Jarvis，把事情做到最好！"},
					{text:"晚上好，Jarvis，记得吃饭，记得睡觉！"}
				]
			}
		},
		watch:{
			'$route'(to,from){
				if(to.meta){
					this.breadContent = to.meta;
				}
			}
		},
		created(){
			
			this.getNowTime();
			setInterval(()=>{
				this.getNowTime();
			},1000)
			
		},
		methods:{
			getNowTime(){
				let date = new Date().getHours();
				
				if(date >=19 && date <= 23){
					this.greetcontent = this.greetText[4].text;
				}
				if(date >=0 && date <= 4){
					this.greetcontent = this.greetText[4].text;
				}
				if(date >=5 && date <= 8){
					this.greetcontent = this.greetText[0].text;
				}
				if(date >=9 && date <= 11){
					this.greetcontent = this.greetText[1].text;
				}
				if(date >=12 && date <= 13){
					this.greetcontent = this.greetText[2].text;
				}
				if(date >=14 && date <= 18){
					this.greetcontent = this.greetText[3].text;
				}
			}
		}
	}
</script>
<style lang="scss">
	.onrightTitle{
		height: 140px;
		width: 100%;
		background: #fff;
		padding: 16px 32px 0;
		border: 1px solid #e8e8e8;
		box-sizing: border-box;
		.headertop{
			margin-bottom: 20px;
			.el-breadcrumb__inner{
				color: rgba(0,0,0,.45);
			}
			.el-breadcrumb__separator{
				font-weight: normal;
				color: rgba(0,0,0,.45);
			}
		}
			.headerbottom{
				.greet{
					color: black;
					font-size: 18px;
				}
				.headerimg{
					display: inline-block;
					vertical-align: middle;
					margin-right: 20px;
					width: 72px;
					height: 72px;
					img{
						display: block;
						width: 100%;
						height: 100%;
						border-radius: 72px;
					}
					
				}
			}
		
	}
	
</style>
