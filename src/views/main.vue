<template>
	<div class="main">
		<div class="left">
			<h2>
			<img  class="veralimiddle" src="../common/img/robot.svg" />	
			 <span class="veralimiddle">{{title}}</span> 
			</h2>
			<ul>
				<li v-for="(item,index) in systemarr">
					<div class="lititle paddingleft cur" @click="ontitleli(index)">
						<i class="el-icon-tickets"></i> 
						<span :class="{cwhite:breadContentarr[0]==item.meta}">{{item.meta}}</span> 
						<i class="el-icon-arrow-down" :class="{roate180:index==vindex}"></i>
					</div>
					<transition @enter="enter" @afterEnter="afterEnter" @leave="leave" @afterLeave="afterLeave">
						<ul class="onvueheight" v-show="index==vindex">
							<router-link v-for="(initem,vndex) in item.children" :key="vndex"  tag="li" class="paddingleft tab-item" :to="initem.path" >
									{{initem.name}}
							 </router-link>
						</ul>
					</transition>	
				</li>
			</ul>
		</div>
		<div class="onright">
			<onrightTitle></onrightTitle>
			<div style="margin-top: 20px;">
			</div>
			<router-view></router-view>
		</div>
		
	</div>
</template>

<script>
	import OnrightTitle from 'components/onrightTitle'
	import {mapGetters} from 'vuex'
	export default{
		components:{
			OnrightTitle
		},
		data(){
			return{
				vindex:0,
				titlearr:["浪子回头","Keep Walk","不再回头","再见昨天","为了明天","为了信仰"],
				title:'',
				systemarr:[]
			}
		},
		computed:{
			
			...mapGetters(['breadContentarr'])
			
		},
		created(){
			let {routes} = this.$router.options;
			console.log(routes);
			let arr = routes.slice();
			arr.shift();
			arr.forEach(value=>{
				value.children = value.children.filter(palue=>{
					return palue.path!="/";
				})
			})
			console.log("arr",arr)
			this.systemarr = arr;
			
            this.getTitlename();
			setInterval(()=>{
				this.getTitlename()
			},1*60*1000)

		},
		methods:{
			
			ontitleli(index){
		
				if(index == this.vindex){
					this.vindex =  -1;
				}else{
					this.vindex =  index;
				}
			},
			getTitlename(){
				let length = this.titlearr.length;
				let index = Math.floor(Math.random()*length);
				
				if(this.titlearr[index] == this.title){
					this.getTitlename();
				}else{
					this.title = this.titlearr[index];
				}
				
			},
			enter(el) {
				el.style.height = 'auto';
				let endWidth = window.getComputedStyle(el).height;
				el.style.height = '0px';
				el.offsetHeight // force repaint
				el.style.height = endWidth;
			},
			afterEnter(el) {
				el.style.height = null;
			},
			leave(el) {
				el.style.height = window.getComputedStyle(el).height;
				el.offsetHeight // force repaint
				el.style.height = '0px';
			},
			afterLeave(el) {
				el.style.height = null;
			},
		}
	}
</script>

<style lang="scss">
	
	.main{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		background: #f0f2f5;
		width: 100%;
		.left{
			width: 280px;
			background: #272626;
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
			.onvueheight{
				overflow: hidden;
				transition: height .3s ease-in-out;
			}
			ul{
				li{
					line-height: 45px;
					color: hsla(0,0%,100%,.65);
					transition: color .3s cubic-bezier(.645,.045,.355,1)
				}
				.lititle{
					position: relative;
					.el-icon-tickets{
						position: absolute;
						left: 20px;
						top:15px;
					}
					.el-icon-arrow-down{
						position: absolute;
						right: 20px;
						top:15px;
						transition: all .3s;
						transform: rotateX(0deg);
					}
					.roate180{
						transition: all .3s;
						transform: rotateX(180deg);
					}
					.cwhite{
						color: white;
					}
				}
				.paddingleft{
					padding-left: 50px;
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
			min-height: 100vh;
			padding:0 5px;
			padding-top: 5px;
			box-sizing: border-box;
			overflow: hidden;
			
		}
	}
	
	
	
</style>
