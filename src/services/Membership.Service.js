import API from "./API";

const MembershipService = {
  getMemberships() {
    return API().get(`/memberships`);
  },

  saveMembership(payload) {
    return API().post(`/memberships`, payload);
  },

  getMembershipOrderDetails(payload) {
    return API().get(
      `/memberships/get-user-memberships/${payload?.booking_id}/${payload?.order_id}`,
      payload
    );
  },
};

export default MembershipService;
