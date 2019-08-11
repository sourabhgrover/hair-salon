import axios from "axios";
var hairSalonApis = {};
if (localStorage.jwtToken) {
  console.log("Token exist");
  hairSalonApis = axios.create({
    baseURL: "http://3.221.144.224:3200/v1/",
    headers: { Authorization: `${localStorage.jwtToken}` }
  });
} else {
  console.log("Token doesnot exist");
  hairSalonApis = axios.create({
    baseURL: "http://3.221.144.224:3200/v1/"
  });
}

const hairSalonApi = hairSalonApis;
export default hairSalonApi;
