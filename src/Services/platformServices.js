import api from './config'

export const getPlatform = async () => {
  const { data } = await api.get('/platform', {
    headers: {
      'token': localStorage.getItem('token')
    }
  })
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

export const postPlatform = async (body) => {
  const { data } = await api.post('/platform', body)
  return data
}

export const deletePlatform = async (id) => {
  const { data } = await api.delete(`/platform/${id}`)
  return data
}
