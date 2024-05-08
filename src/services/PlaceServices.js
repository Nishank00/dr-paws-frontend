import API from "./API";

const PlaceService = {
  getAllStates() {
    return API().get("/places/get-states");
  },
  getAllCities(stateCode = null) {
    return API().get(
      `/places/get-cities${stateCode ? `?state_id=${stateCode}` : ""}`
    );
  },
};

export default PlaceService;
