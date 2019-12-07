import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'



export const doPost = (config)=>{

	 const instance =  axios.create({
		//baseURL:process.env.NODE_ENV === "development" ? 'http://localhost:3000' : '/',
		//baseURL:'http://221.224.123.197:50003',
		//timeout:3000
	});
	//请求前的时候会执行此方法-拦截器
	instance.interceptors.request.use((config)=>{    //config当前请求的配置
		config.method="post"
		config.headers.AccessToken=localStorage.getItem('vsys_token')
		if(config.data){
			
			config.data=qs.stringify(config.data); 
		}
		return config
	},err=>{
		return Promise.reject(err);
	});
	//设置响应拦截器
	instance.interceptors.response.use(res=>res.data,err=>{
		console.log(err.error)
		console.log(typeof err)
		let abc =  JSON.parse(JSON.stringify(err));
		Vue.prototype.$message.error(`系统异常-${abc.message}`);
	});
	return instance(config)
}




