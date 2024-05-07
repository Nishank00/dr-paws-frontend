import API from "./API";

const clinicService = {
  getData(params) {
    return API().get(`clinic/getData`, { params });
  },

  getClinics(params = {}) {
    return API().get("clinic", { params });
  },

  addClinic(payload = {}) {
    if (!payload) {
      return new Error("payload is required");
    }
    return API().post("clinic", payload);
  },

  updateClinic(id, payload = {}) {
    if (!id || !payload) {
      return new Error("Required parameter id or payload is missing");
    }
    return API().put(`clinic/${id}`, payload);
  },
  getClinicMetaData(payload) {
    if (!payload?.clinic_id && !payload?.type) {
      return new Error("Required parameter missing");
    }
    return API().get(
      `clinic/get-clinic-meta-data/${payload.clinic_id}/${payload.type}`
    );
  },
};

export default clinicService;
