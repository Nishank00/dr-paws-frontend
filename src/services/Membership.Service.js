import API from "./API"

export default {
  getMemberships() {
    return API().get(`/memberships`)
  },

  saveMembership(payload) {
    return API().post(`/memberships`, payload)
  }
}