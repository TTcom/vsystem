import {doPost} from '../utils/axios'

export const getUserList =(params)=>doPost({url:'queryUserInfoListByCondition',data:params})