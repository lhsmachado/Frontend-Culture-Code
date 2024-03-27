import axios from "axios";
const accessToken = localStorage.getItem("access_token") || "";
export const api = axios.create({
  baseURL: "https://testes-1ort.onrender.com",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});
