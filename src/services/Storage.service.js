const TOKEN_KEY = "access_token";

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

export {
  TokenService
};
