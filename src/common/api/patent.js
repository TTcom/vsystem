import {doPost} from '../utils/axios'

export default{

     getpatentList(params){
         return doPost({url:'queryPatentListByCondition',data:params})
     },
     getUserpatentList(params){
        return doPost({url:'queryUserPatentListByCondition',data:params})
    },


    
} 