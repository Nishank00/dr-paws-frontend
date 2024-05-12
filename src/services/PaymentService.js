const { default: API } = require("./API");

const paymentService = {
  createOrder(payload) {
    return API().post(
      `/payments/payment/${payload?.membership_id}/${payload?.pet_id}/${payload?.plan_duration}`,
      payload
    );
  },
  generateCallBackurl(payload) {
    return API().post(`/payments/payment/rpay-callback`, payload);
  },
};

export default paymentService;
