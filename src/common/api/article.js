import { doPost } from "../utils/axios"

export default {
  getarticleList(params) {
    return doPost({ url: "queryArticleListByCondition", data: params }, true)
  },
  policearticle(params) {
    return doPost({ url: "authArticleByCondition", data: params })
  },
  queryArticleCommentListByCondition(params) {
    //文章Id查询评论列表
    return doPost({ url: "queryArticleCommentListByCondition", data: params })
  },
  deleteArticleCommentByCondition(params) {
    //文章评论删除接口
    return doPost({ url: "deleteArticleCommentByCondition", data: params })
  },
  queryArticleCommonReportListByCondition(params) {
    //文章评论举报列表接口
    return doPost({ url: "queryArticleCommonReportListByCondition", data: params })
  },
  deleteArticleCommonReportByCondition(params) {
    //文章评论举报删除接口
    return doPost({ url: "deleteArticleCommonReportByCondition", data: params })
  },
  authArticleCommonReportByCondition(params) {
    //文章评论举报审核接口
    return doPost({ url: "authArticleCommonReportByCondition", data: params })
  }
}
