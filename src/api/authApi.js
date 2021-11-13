import axiosInstance from "factory/apiFactory";
export const loginAsAdmin = async (email, password) => {
  return axiosInstance.post("/api/v1/auth/login", {
    email,
    password,
  });
};
