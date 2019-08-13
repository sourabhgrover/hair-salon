import axios from "axios";
var hairSalonApis = {};
if (localStorage.jwtToken) {
  hairSalonApis = axios.create({
    baseURL: "http://manegeek.com:3200/v1/",
    headers: { Authorization: `${localStorage.jwtToken}` }
  });
} else {
  hairSalonApis = axios.create({
    baseURL: "http://manegeek.com:3200/v1/"
  });
}

const hairSalonApi = hairSalonApis;
export default hairSalonApi;
