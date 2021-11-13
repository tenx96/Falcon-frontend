import axiosInstance from "factory/apiFactory";
export const getFood = async () => {
  return axiosInstance.get("/api/v1/food");
};



