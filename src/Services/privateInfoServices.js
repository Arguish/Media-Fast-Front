import api from './config'

export const getprivateInfo = async () => {
  const { data } = await api.get('/private_info')
  return data
}

export const getprivateInfoByID = async (id) => {
  const { data } = await api.get(`/private_info/${id}`)
  return data
}

export const getprivateInfoMe = async (id) => {
  const { data } = await api.get(`/private_info/me`)
  return data
}

export const putprivateInfo = async (id) => {
  const { data } = await api.put(`/private_info/${id}`)
  return data
}

export const putprivateInfoMe = async (id) => {
  const { data } = await api.put(`/private_info/me`)
  return data
}

export const postprivateInfo = async (id) => {
  const { data } = await api.post('/private_info')
  return data
}

export const deleteprivateInfo = async (id) => {
  const { data } = await api.delete(`/private_info/${id}`)
  return data
}

export const deleteprivateInfoMe = async (id) => {
  const { data } = await api.delete(`/private_info/me`)
  return data
}
