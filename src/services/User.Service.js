import API from "./API"

export default {
  getProfile() {
    return API().get(`user/getProfile`)
  },

  getUserById(id) {
    return API().get(`user/getUser/${id}`)
  },

  updateUser(payload) {
    return API().post(`user/updateProfile`, payload)
  },

  getDoctors() {
    return API().get(`doctors`)
  },
  saveBillingDetails(payload){
    return API().post("user/updateBillingDetails",payload)
  },
  getBillingDetails(params){
    return API().get("user/getBillingDetails",{params})
  }

}