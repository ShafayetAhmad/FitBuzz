import axios from "axios";

export const axiosSecure = axios.create({
  baseURL: "https://fit-buzz-server.vercel.app",
  // baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
