import api from './config'

export const getPlatform = async () => {
  const { data } = await api.get('/platform')
  return data
}

export const getPlatformByID = async (id) => {
  const { data } = await api.get(`/platform/${id}`)
  return data
}

export const putPlatform = async (id) => {
  const { data } = await api.put(`/platform/${id}`)
  return data
}

export const postPlatform = async (id) => {
  const { data } = await api.post('/platform')
  return data
}

export const deletePlatform = async (id) => {
  const { data } = await api.delete(`/platform/${id}`)
  return data
}
