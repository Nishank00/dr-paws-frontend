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

  getChildsByParentId(params) {
    return API().get("master/childs_by_parent_id", { params })
  },

  getMastersWithChildsByCode(params) {
    return API().get("master/get_masters_with_childs", { params })
  },

  addMaster(payload) {
    return API().post("master", payload)
  },

  getDaysOfWeek() {
    return API().get("master/masters_by_code", { params: { code: "DAYS_OF_WEEK" } })
  }

}