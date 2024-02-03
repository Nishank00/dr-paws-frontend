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
  }

}