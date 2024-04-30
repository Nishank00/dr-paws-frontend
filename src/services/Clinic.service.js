import API from "./API";

export default {
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
};
