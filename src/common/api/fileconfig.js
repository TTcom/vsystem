import {doPost} from '../utils/axios'

export default{

     getQueryPatentTypeList(){
         return doPost({url:'queryPatentTypeList'})
     },
     getQueryImportPatentType(params){
        return doPost({url:'queryImportPatentType'})
     },
     setImportPatentType(params){
        return doPost({url:'setImportPatentType',data:params})
     },


    
} 