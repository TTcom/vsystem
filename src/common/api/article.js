import {doPost} from '../utils/axios'

export const getarticleList =(params)=>doPost({url:'queryArticlebByCondition',data:params})