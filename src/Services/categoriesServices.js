import api from "./config";

export const getCategory = async () => {
  const { data } = await api.get("/category", {
    headers: {
      'token': localStorage.getItem('token')
    }
  });
  return data;
};

export const getCategoryByID = async (id) => {
  const { data } = await api.get(`/category/${id}`);
  return data;
};

export const putCategory = async (id) => {
  const { data } = await api.put(`/category/${id}`);
  return data;
};

export const postCategory = async (id) => {
  const { data } = await api.post("/category");
  return data;
};

export const deleteCategory = async (id) => {
  const { data } = await api.delete(`/category/${id}`);
  return data;
};
