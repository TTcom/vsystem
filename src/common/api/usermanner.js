import { doPost } from "../utils/axios"

export default {
  getUserList(params) {
    return doPost({ url: "queryUserInfoListByCondition", data: params }, true)
  },
  getuserdetail(params) {
    return doPost({ url: "queryUserInfoByCondition", data: params })
  },
  policeuser(params) {
    return doPost({ url: "authUserInfoByCondition", data: params })
  }
}
