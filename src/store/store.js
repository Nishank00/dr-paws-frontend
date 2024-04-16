import { configureStore } from '@reduxjs/toolkit'
import pageHeaderReducer from './features/pageHeader/pageHeaderSlice'
import currentDeviceReducer from './features/currentDevice/currentDeviceSlice'

export const store = configureStore({
  reducer: { pageHeader: pageHeaderReducer, currentDevice: currentDeviceReducer },
})