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
  },

  cancelBooking(payload) {
    return API().post("/booking/cancel", payload)
  },

  sendBookingOTP(payload) {
    return API().post("/booking/sendBookingOTP", payload)
  },

  verifyBookingOTP(payload) {
    return API().post("/booking/verifyBookingOTP", payload)
  }
}