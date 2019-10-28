<template>
	<div class="main">
		<div class="left">
			<h2>
			<img  class="veralimiddle" src="../common/img/robot.svg" />	
			 <span class="veralimiddle">{{title}}</span> 
			</h2>
			<ul>
				<router-link v-for="item in systemarr" :key="item.id"  tag="li" class="tab-item" :to="item.path" >
						{{item.name}}
				 </router-link>
			</ul>
		</div>
		<div class="onright">
			<onrightTitle></onrightTitle>
			<router-view></router-view>
		</div>
		
	</div>
</template>

<script>
	import OnrightTitle from 'components/onrightTitle'
	export default{
		components:{
			OnrightTitle
		},
		data(){
			return{
				titlearr:["浪子回头","Keep Walk","不再回头","再见昨天","为了明天","为了信仰"],
				title:'',
				systemarr:[
					   {"name":"人员管理","path":"/main/people","id":1},
					   {"name":"文章管理","path":"/main/article","id":2},
					]
			}
		},
		created(){
            this.getTitlename();
			setInterval(()=>{
				this.getTitlename()
			},1*60*1000)

		},
		methods:{
			getTitlename(){
				let length = this.titlearr.length;
				let index = Math.floor(Math.random()*length);
				console.log(index);
				if(this.titlearr[index] == this.title){
					this.getTitlename();
				}else{
					this.title = this.titlearr[index];
				}
				
			}
		}
	}
</script>

<style lang="scss">
	.main{
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		.left{
			width: 280px;
			background: #272626;
			height: 100%;
			h2{
				text-align: left;
				padding-left: 15px;
				color: white;
				height: 64px;
				line-height: 64px;
				background: black;
				img{
					width: 40px;
					margin-right: 30px;
				}
			}
			ul{
				li{
					height: 45px;
					line-height: 45px;
					color: hsla(0,0%,100%,.65);
					padding-left: 15px;
				}
				.tab-item{
					cursor: pointer;
				}
				.router-link-active{
					 color:white;
					 
					 background-image: linear-gradient(to right, black , white );
				}
				
			}
			
		}
		.onright{
			flex-grow: 1;
			height: 100%;
			padding:0 5px;
			padding-top: 5px;
			box-sizing: border-box;
			width: 0;
		}
	}
	
	
	
</style>
