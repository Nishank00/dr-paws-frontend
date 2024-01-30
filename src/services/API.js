import axios from "axios";
import { TokenService } from "./Storage.service";

export default function API() {
  const instance = axios.create({
    baseURL: "http://localhost:8004/api",
  });

  instance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  instance.interceptors.request.use(async (req) => {

    const ACCESS_TOKEN = TokenService.getToken();

    if (ACCESS_TOKEN) {
      req.headers["Authorization"] = `${ACCESS_TOKEN}`;
    }
    return req;
  });

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {

      if (!error["response"]) {
        showErrorMessage("Your authorization token is invalid or expired ", error);
        // if (window.location.pathname !== '/login') window.location.replace("/login")
        return Promise.reject(error);
      } else if (error.response.status == 403 || error.response.status == 401) {
        TokenService.removeToken();
      }
      return Promise.reject(error.response);
    }
  );

  const showErrorMessage = (message) => {
    console.log("Api Error ", message);
  };

  return instance;
}
