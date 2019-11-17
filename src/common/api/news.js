import {doPost} from '../utils/axios'

export default{

     getnewsList(params){
         return doPost({url:'queryMessageListByCondition',data:params})
     }
    
} 