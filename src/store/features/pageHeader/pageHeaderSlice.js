import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  title: "Home",
  currentMenu: "HOME",
  currentPath: "/",
}

export const pageHeaderSlice = createSlice({
  name: 'pageHeader',
  initialState,
  reducers: {
    setPageHeader(state, action) {
      action.payload.title ? state.title = action.payload.title : null
      action.payload.currentMenu ? state.currentMenu = action.payload.currentMenu : null
      action.payload.currentPath ? state.currentPath = action.payload.currentPath : null
    },

    setPageTitle(state, action) {
      state.title = action.payload.title
    },

    setPageMenu(state, action) {
      state.currentMenu = action.payload.currentMenu
    },

    setPagePath(state, action) {
      state.currentPath = action.payload.currentPath
    }


  }
})

export const { setPageHeader, setPageTitle, setPageMenu, setPagePath } = pageHeaderSlice.actions
export default pageHeaderSlice.reducer