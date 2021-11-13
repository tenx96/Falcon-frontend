import axiosInstance from "factory/apiFactory";
export const getFood = async () => {
  setTimeout(() => {
    return axiosInstance.get("/api/v1/food");
  }, 3000);
};
