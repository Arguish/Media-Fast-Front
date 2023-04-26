import api from "./config";

export const getMedia = async () => {
  const { data } = await api.get("/media");
  return data;
};

export const getMediaRandom = async (id) => {
  const { data } = await api.get(`/media/random`);
  return data;
};

export const getMediaByID = async (id) => {
  const { data } = await api.get(`/media/${id}`);
  return data;
};

export const putMedia = async (id) => {
  const { data } = await api.put(`/media/${id}`);
  return data;
};

export const postMedia = async (id) => {
  const { data } = await api.post("/media");
  return data;
};

export const deleteMedia = async (id) => {
  const { data } = await api.delete(`/media/${id}`);
  return data;
};

export { getMedia, getMediaByID, putMedia, postMedia, deleteMedia };
