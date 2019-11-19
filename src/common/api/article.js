import {doPost} from '../utils/axios'


export default{
    getarticleList(params){
        return doPost({url:'queryArticleListByCondition',data:params})
    },
    policearticle(params){
        return doPost({url:'authArticleByCondition',data:params})
    }
}
