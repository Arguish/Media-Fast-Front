import api from './config'

export const getUser = async () => {
  const { data } = await api.get('/user', {
    headers: {
      'token': localStorage.getItem('token')
    }
  }
  )
  return data
}

export const getUserByID = async (id) => {
  const { data } = await api.get(`/user/${id}`, {
    headers: {
      'token': localStorage.getItem('token')
    }
  })
  return data
}

export const getUserMe = async (id) => {
  const { data } = await api.get(`/user/me`, {
    headers: {
      'token': localStorage.getItem('token')
    }
  })
  return data
}

export const setUserCategories = async (body) => {
  const { data } = await api.post(`/user/me/categories`, body, {
    headers: {
      'token': localStorage.getItem('token')
    }
  })
  return data
}

export const getUserMeMedia = async (id) => {
  const { data } = await api.get(`/user/me/user_media`, {
    headers: {
      'token': localStorage.getItem('token')
    }
  })
  return data
}

export const getUserByIDMedia = async (id) => {
  const { data } = await api.get(`/user/${id}/user_media`, {
    headers: {
      'token': localStorage.getItem('token')
    }
  })
  return data
}

export const putUser = async (id) => {
  const { data } = await api.put(`/user/${id}`)
  return data
}

export const putUserMe = async (id) => {
  const { data } = await api.put(`/user/me`, {
    headers: {
      'token': localStorage.getItem('token')
    }
  })
  return data
}

export const updateUserCategories = async (categories) => {
  const { data } = await api.put('/user/me/categories', categories, {
    headers: {
      'token': localStorage.getItem('token')
    }
  })
  return data
}

export const postUser = async (id) => {
  const { data } = await api.post(`/user/${id}`, {
    headers: {
      'token': localStorage.getItem('token')
    }
  }
  )
  return data
}

export const postUserMedia = async (id) => {
  const { data } = await api.post(`/user/me/user_media/${id}`)
  return data
}

export const deleteUser = async (id) => {
  const { data } = await api.delete(`/user/${id}`, {
    headers: {
      'token': localStorage.getItem('token')
    }
  })
  return data
}

export const deleteUserME = async (id) => {
  const { data } = await api.delete(`/user/me`)
  return data
}
