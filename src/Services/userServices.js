import api from "./config";

 const getUser = async () => {
  const { data } = await api.get("/user");
  return data;
};

 const getUserByID = async (id) => {
  const { data } = await api.get(`/user/${id}`);
  return data;
};

 const getUserMe = async (id) => {
  const { data } = await api.get(`/user/me`);
  return data;
};

 const getUserMeMedia = async (id) => {
  const { data } = await api.get(`/user/me/user_media`);
  return data;
};

 const getUserByIDMedia = async (id) => {
  const { data } = await api.get(`/user/${id}/user_media`);
  return data;
};

 const putUser = async (id) => {
  const { data } = await api.put(`/user/${id}`);
  return data;
};

 const putUserMe = async (id) => {
  const { data } = await api.put(`/user/me`);
  return data;
};

 const postUser = async (id) => {
  const { data } = await api.post(`/user/${id}`);
  return data;
};

 const postUserMedia = async (id) => {
  const { data } = await api.post(`/user/me/user_media/${id}`);
  return data;
};

 const deleteUser = async (id) => {
  const { data } = await api.delete(`/user/${id}`);
  return data;
};

 const deleteUserME = async (id) => {
  const { data } = await api.delete(`/user/me`);
  return data;
};

export {
  getUser,
  getUserByID,
  getUserMe,
  getUserMeMedia,
  getUserByIDMedia,
  putUser,
  putUserMe,
  postUser,
  postUserMedia,
  deleteUser,
  deleteUserME,
};
