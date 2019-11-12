import axios from 'axios'
import qs from 'qs'




export const doPost = (config)=>{

	 const instance =  axios.create({
		//baseURL:process.env.NODE_ENV === "development" ? 'http://localhost:3000' : '/',
		baseURL:'http://221.224.123.197:50003',
		timeout:5000,
	});
	//请求的时候会执行此方法-拦截器
	instance.interceptors.request.use((config)=>{    //config当前请求的配置
		config.method="post"
		if(config.data){
			config.data=qs.stringify(config.data); 
		}
		return config
	},err=>{
		return Promise.reject(err);
	});
	//设置响应拦截器
	instance.interceptors.response.use(res=>res.data,err=>Promise.reject(err));
	

	
	return instance(config)
}




