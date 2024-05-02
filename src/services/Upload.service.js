import Api from "./API"

export default {
  uploadFile(payload) {
    return Api().post("/upload/files", payload)
  },
}