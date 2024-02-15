import axios from "axios";
const accessToken = localStorage.getItem("access_token") || "";
export const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});
