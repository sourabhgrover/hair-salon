import axios from "axios";
var hairSalonApis = {};
if (localStorage.jwtToken) {
  hairSalonApis = axios.create({
    baseURL: "http://3.221.144.224:3200/v1/",
    headers: { Authorization: `${localStorage.jwtToken}` }
  });
} else {
  hairSalonApis = axios.create({
    baseURL: "http://3.221.144.224:3200/v1/"
  });
}

const hairSalonApi = hairSalonApis;
export default hairSalonApi;
