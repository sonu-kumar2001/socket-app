import axios from "axios";

const login = (payload) =>
  axios.post("https://almondfxwebapi.digixhub.com/userAuthentication", payload);

const authApi = {
  login,
};
export default authApi;
