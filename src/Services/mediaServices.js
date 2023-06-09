import api from './config'

export const getMedia = async () => {
  const { data } = await api.get('/media', {
    headers: {
      'token': localStorage.getItem('token')
    }
  })
  return data
}

export const getMediaRandom = async (id) => {
  const { data } = await api.get(`/media/random`, {
    headers: {
      'token': localStorage.getItem('token')
    }
  })
  return data
}

export const getMediaByID = async (id) => {
  const { data } = await api.get(`/media/${id}`, {
    headers: {
      'token': localStorage.getItem('token')
    }
  })
  return data
}

export const putMedia = async (id) => {
  const { data } = await api.put(`/media/${id}`, {
    headers: {
      'token': localStorage.getItem('token')
    }
  })
  return data
}

export const postMedia = async (body) => {
  const { data } = await api.post('/media', body, {
    headers: {
      'token': localStorage.getItem('token')
    }
  })
  return data
}

export const deleteMedia = async (id) => {
  const { data } = await api.delete(`/media/${id}`, {
    headers: {
      'token': localStorage.getItem('token')
    }
  })
  return data
}

export const getMediaByCategories = async (userId) => {
  const { data } = await api.get(`/media/user/${userId}/categories`, {
    headers: {
      'token': localStorage.getItem('token')
    }
  })
  return data
}

export const getMediaByCategoriesAndType = async (userId, type) => {
  const { data } = await api.get(`media/user/${userId}/categories/media/${type}`, {
    headers: {
      'token': localStorage.getItem('token')
    }
  })
  return data
}
