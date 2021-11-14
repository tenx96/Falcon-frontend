import { makeJsonApiCall, makeMultipartApiCall } from "./utils/apiUtils";

const resource_name = "announcements"

export const getAnnouncements = async () => {
  return makeJsonApiCall("GET", `/api/v1/${resource_name}`);
};

export const updateAnnouncementData = async (id, data) => {
  return makeMultipartApiCall("PATCH", `/api/v1/${resource_name}/${id}`, data);
};

export const createAnnouncementData = async (data) => {
  return makeMultipartApiCall("POST", "/api/v1/${resource_name}", data);
};

export const deleteAnnouncementData = async (id) => {
  return makeJsonApiCall("DELETE", `/api/v1/${resource_name}/${id}`);
};
