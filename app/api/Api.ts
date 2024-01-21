import axios from "axios";

const BASE_URL = "http://restapi.adequateshop.com";

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "Application/json",
    Accept: "Application/json",
  },
});

export default API;
