"use client"
const TOKEN_KEY = "access_token";
const USER_KEY = "user_info";

const TokenService = {
  getToken() {
    return window.localStorage.getItem(TOKEN_KEY);
  },

  saveToken(accessToken) {
    window.localStorage.setItem(TOKEN_KEY, accessToken);
  },

  removeToken() {
    window.localStorage.removeItem(TOKEN_KEY);
  }
};

const UserService = {
  getUserInfo() {
    return JSON.parse(window.localStorage.getItem(USER_KEY));
  },

  setUserInfo(userInfo) {
    window.localStorage.setItem(USER_KEY, JSON.stringify(userInfo));
  },

  removeUserInfo() {
    window.localStorage.removeItem(USER_KEY);
  }
}
export {
  TokenService,
  UserService
};
