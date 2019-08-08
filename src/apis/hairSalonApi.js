import axios from "axios";
var hairSalonApis = {};
if (localStorage.jwtToken) {
  console.log("Token exist");
  hairSalonApis = axios.create({
    baseURL: "http://3.221.144.224:3200/v1/",
    // baseURL: "http://112.196.86.35:3200/v1",
    headers: { Authorization: `${localStorage.jwtToken}` }
  });
} else {
  console.log("Token doesnot exist");
  hairSalonApis = axios.create({
    baseURL: "http://3.221.144.224:3200/v1/"
    // baseURL: "http://112.196.86.35:3200/v1"
    // ,
    // headers: { Authorization: "bearer " + token }
  });
}

const hairSalonApi = hairSalonApis;
export default hairSalonApi;
