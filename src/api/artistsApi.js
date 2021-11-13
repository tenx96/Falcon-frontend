import axiosInstance from "factory/apiFactory";
export const getArtists = async () => {
  return axiosInstance.get("/api/v1/artists");
};



