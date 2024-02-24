import API from "./API"

export default {
  getAppointments(params = {}) {
    return API().get("/booking", { params })
  },

  getAppointment(id) {
    return API().get(`/booking/${id}`)
  },

  bookAppointment(payload) {
    return API().post("/booking", payload)
  }
}