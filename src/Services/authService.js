import api from './config'

export const register = async (body) => {
  const data = await api.post('/auth/register', body)
  localStorage.setItem('token', data.data.token)
  localStorage.setItem('userId', data.data.user.id)
  return data
}

export const login = async (body) => {
  try {
    console.log('connecting...')
    const { data } = await api.post('/auth/login', body)
    const userId = data.userInfo.user.id
    localStorage.setItem('userId', userId)
    localStorage.setItem('token', data.token)
    localStorage.setItem('email', body.email)
    return 200
  } catch (error) {
    return error.message
  }
}
