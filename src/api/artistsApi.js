import axiosInstance from "factory/apiFactory";
export const getArtists = async () => {
  return axiosInstance.get("/api/v1/artists");
};

export const updateArtistData = async (id, data) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });

  const response = await axiosInstance.patch(
    `/api/v1/artists/${id}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  if (response.status < 300) {
    return response;
  } else {
    console.log("error block");
    return Promise.reject(response);
  }
};

export const createArtistData = async (data) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });

  const response = await axiosInstance.post(`/api/v1/artists`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  if (response.status < 300) {
    return response;
  } else {
    console.log("error block");
    return Promise.reject(response);
  }
};

export const deleteArtistData = async (id) => {
  const response = await axiosInstance.delete(`/api/v1/artists/${id}`);
  if (response.status < 300) {
    return response;
  } else {
    console.log("error happening");
    return Promise.reject(response);
  }
};
