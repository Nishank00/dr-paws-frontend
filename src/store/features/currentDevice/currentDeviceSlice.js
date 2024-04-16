import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isMobile: true,
  isTablet: false,
  isDesktop: false,
}

export const currentDeviceSlice = createSlice({
  name: 'currentDevice',
  initialState,
  reducers: {
    setMobile(state) {
      state.isMobile = true
      state.isTablet = false
      state.isDesktop = false
    },

    setTablet(state) {
      state.isMobile = false
      state.isTablet = true
      state.isDesktop = false
    },

    setDesktop(state) {
      state.isMobile = false
      state.isTablet = false
      state.isDesktop = true
    }
  }
})

export const { setMobile, setTablet, setDesktop } = currentDeviceSlice.actions
export default currentDeviceSlice.reducer