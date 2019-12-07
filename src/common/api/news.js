import {doPost} from '../utils/axios'

export default{

     getnewsList(params){
         return doPost({url:'queryMessageListByCondition',data:params})
     },
     createMessge(params){
        return doPost({url:'createMessge',data:params})
     },
     deleteMessgeByCondition (params){
        return doPost({url:'deleteMessgeByCondition ',data:params})
     },
     updateMessgeByCondition (params){
        return doPost({url:'updateMessgeByCondition ',data:params})
     },
     sendMessge (params){
      return doPost({url:'sendMessge ',data:params})
   },
    
} 