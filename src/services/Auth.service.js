import API from "./API"

export default {

  register(payload) {
    return API().post(`auth/register`, payload)
  },

  login(payload) {
    return API().post(`auth/login`, payload)
  }

}