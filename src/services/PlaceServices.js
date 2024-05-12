import API from "./API";

const PlaceService = {
  getAllStates(countryCode = null) {
    return API().get(
      `/places/get-states${countryCode ? `?countryCode=${countryCode}` : ""}`
    );
  },
  getAllCities(stateCode = null) {
    return API().get(
      `/places/get-cities${stateCode ? `?state_id=${stateCode}` : ""}`
    );
  },
  getAllCountries() {
    return API().get(`/places/get-countries`);
  },
};

export default PlaceService;
