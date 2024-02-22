import API from "./API"

export default {
  bookAppointment(payload) {
    return API().post("/booking", payload)
  }
}