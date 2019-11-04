import {doPost} from '../utils/axios'

export const getUserList =()=>doPost({url:'queryUserInfoListByCondition'})