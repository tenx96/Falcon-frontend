import axiosInstance from "factory/apiFactory";

export const makeMultipartApiCall = async (method, url, data) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });

  try {
    const response = await axiosInstance({
      method: method,
      url: url,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status < 300) {
      return response;
    } else {
      return Promise.reject(response);
    }
  } catch (err) {
    return Promise.reject(err);
  }
};

export const makeJsonApiCall = async (method, url, data) => {
  try {
    const response = await axiosInstance({
      method: method,
      url: url,
      data: data,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status < 300) {
      return response;
    } else {
      return Promise.reject(response);
    }
  } catch (err) {
    return Promise.reject(err);
  }
};
