import API from "./API";

const DoctorService = {
  getAllDotors() {
    return API().get(`/doctor`);
  },
  getDoctorClinicTimings(payload) {
    let apiStr = `/doctor/getDoctorClinicTimings/${payload?.doctor_id}/${payload?.clinic_id}`;
    if (payload?.date) {
      apiStr += `?date=${payload.date}`;
    }
    return API().get(apiStr);
  },
};

export default DoctorService;
