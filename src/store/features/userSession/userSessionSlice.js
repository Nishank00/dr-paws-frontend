import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user_info: {},
  selectedPetInfo: {},
  token: "",
  user_id: 0,
  isUserLoggedIn: false,
};

export const userSessionSlice = createSlice({
  name: "userSession",
  initialState,
  reducers: {
    setUserSession(state, action) {
      state.user_info = action.payload.user_info;
      state.token = action.payload.token;
      state.user_id = action.payload.user_id;
      state.isUserLoggedIn = action.payload.isUserLoggedIn;
    },

    setUserLoggedIn(state, action) {
      state.isUserLoggedIn = action.payload.isUserLoggedIn;
    },

    setSelectedPetInfo(state, action) {
      state.selectedPetInfo = action.payload.currentSelectedPetInfo;
    },
  },
});

export const { setUserSession, setUserLoggedIn, setSelectedPetInfo } =
  userSessionSlice.actions;
export default userSessionSlice.reducer;
