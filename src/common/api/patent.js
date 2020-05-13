import { doPost } from "../utils/axios"

export default {
  getpatentList(params) {
    return doPost({ url: "queryPatentListByCondition", data: params }, true)
  },
  getUserpatentList(params) {
    return doPost({ url: "queryUserPatentListByCondition", data: params }, true)
  },
  updateUserPatentByCodition(params) {
    return doPost({ url: "updateUserPatentByCodition ", data: params })
  }
}
