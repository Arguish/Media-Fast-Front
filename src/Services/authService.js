import api from './config'

export const register = async (body) => {
  try {
    const data = await api.post('/auth/register', body)
    localStorage.setItem('token', data.data.token)
    localStorage.setItem('userId', data.data.user.id)
    return data
  } catch (error) {
    return error.response
  }
}

export const login = async (body) => {
  try {
    const { data } = await api.post('/auth/login', body)
    const userId = data.userInfo.user.id
    const role = data.userInfo.user.role
    localStorage.setItem('userId', userId)
    localStorage.setItem('token', data.token)
    localStorage.setItem('email', body.email)
    localStorage.setItem('role', role)
    return 200
  } catch (error) {
    return error.message
  }
}
