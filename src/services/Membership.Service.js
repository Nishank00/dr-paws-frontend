import API from "./API"

export default {
  getMemberships() {
    return API().get(`membership`)
  },
}