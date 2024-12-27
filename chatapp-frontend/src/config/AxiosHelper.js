import axios from "axios";
export const baseURL = "http://localhost:8080";
export const httpClient = axios.create({
  baseURL: baseURL,
});

// const REST_API_BASE_URL= 'http://localhost:8080/api/employees';

// //list of emp
// export const listAllEmployees=()=>{
//     return axios.get(REST_API_BASE_URL);
// }

// export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);