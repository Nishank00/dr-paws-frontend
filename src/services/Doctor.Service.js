import API from "./API"

export default {
  getAllDotors() {
    return API().get(`/doctor`)
  },
}