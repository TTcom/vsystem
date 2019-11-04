import {doPost} from '../utils/axios'



export const Login = (param)=>doPost({url:'/login',data:param});
export const loginOut = ()=>doPost({url:'/logout'});

