import { makeJsonApiCall, makeMultipartApiCall } from "./utils/apiUtils";

const resource_name = "sponsors"

export const getSponsor = async () => {
  return makeJsonApiCall("GET", `/api/v1/${resource_name}`);
};

export const updateSponsorData = async (id, data) => {
  return makeMultipartApiCall("PATCH", `/api/v1/${resource_name}/${id}`, data);
};

export const createSponsorData = async (data) => {
  return makeMultipartApiCall("POST", `/api/v1/${resource_name}`, data);
};

export const deleteSponsorData = async (id) => {
  return makeJsonApiCall("DELETE", `/api/v1/${resource_name}/${id}`);
};
