import API from "./API";

export default {
  register(payload) {
    return API().post(`auth/register`, payload);
  },

  login(payload) {
    return API().post(`auth/login`, payload);
  },

  sendLoginOTP(payload) {
    return API().post(`auth/sendLoginOTP`, payload);
  },

  sendRegisterOTP(payload) {
    return API().post(`auth/sendRegisterOTP`, payload);
  },

  checkUserExist(number) {
    return API().get(`auth/check-user-exist/${number}`);
  },
};
