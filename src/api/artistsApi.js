import { makeJsonApiCall, makeMultipartApiCall } from "./utils/apiUtils";

const resource_name = "artists"

export const getArtists = async () => {
  return makeJsonApiCall("GET", `/api/v1/${resource_name}`);
};

export const updateArtistData = async (id, data) => {
  return makeMultipartApiCall("PATCH", `/api/v1/${resource_name}/${id}`, data);
};

export const createArtistData = async (data) => {
  return makeMultipartApiCall("POST", `/api/v1/${resource_name}`, data);
};

export const deleteArtistData = async (id) => {
  return makeJsonApiCall("DELETE", `/api/v1/${resource_name}/${id}`);
};
