import axios from "axios";

export const axiosSecure = axios.create({
  baseURL: "https://fit-buzz-server.vercel.app",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
