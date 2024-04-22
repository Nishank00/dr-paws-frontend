import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  memberships: [],
  selectedMembership: {}
}

export const membershipSlice = createSlice({
  name: 'membership',
  initialState,
  reducers: {
    setMemberships(state, action) {
      state.memberships = action.payload
    },

    setSelectedMembership(state, action) {
      state.selectedMembership = action.payload
    }
  }
})

export const { setMemberships, setSelectedMembership } = membershipSlice.actions
export default membershipSlice.reducer