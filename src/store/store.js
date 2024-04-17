import { configureStore } from '@reduxjs/toolkit'
import pageHeaderReducer from './features/pageHeader/pageHeaderSlice'
import currentDeviceReducer from './features/currentDevice/currentDeviceSlice'
import userSessionReducer from './features/userSession/userSessionSlice'

export const store = configureStore({
  reducer: { pageHeader: pageHeaderReducer, currentDevice: currentDeviceReducer, userSession: userSessionReducer },
})