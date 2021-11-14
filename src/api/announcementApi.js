import axiosInstance from "factory/apiFactory";
export const getAnnouncements = async () => {
  return axiosInstance.get("/api/v1/announcements");
};

export const updateAnnouncementData = async (id, data) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });

  const response = await axiosInstance.patch(
    `/api/v1/announcements/${id}`,
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

export const createAnnouncementData = async (data) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });

  const response = await axiosInstance.post(`/api/v1/announcements`, formData, {
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

export const deleteAnnouncementData = async (id) => {
  const response = await axiosInstance.delete(`/api/v1/announcements/${id}`);
  if (response.status < 300) {
    return response;
  } else {
    console.log("error happening");
    return Promise.reject(response);
  }
};
