import axiosInstance from "factory/apiFactory";
export const getHomeDetails = async () => {
  return axiosInstance.get("/api/v1/home/details");
};
