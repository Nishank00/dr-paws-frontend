import API from "./API"

export default {

  getMasterTypes() {
    return API().get("master/master_types")
  },

  getMastersByCode(params) {
    return API().get("master/masters_by_code", { params })
  },

  getMastersByTypeId(params) {
    return API().get("master/masters_by_type_id", { params })
  },

  addMaster(payload) {
    return API().post("master", payload)
  }

}