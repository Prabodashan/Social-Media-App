import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://localhost:3300/api/",
  withCredentials: true,
});
