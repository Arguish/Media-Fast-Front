import api from "./config";

const register = async (body) => {
  const data = await api.post('/auth/register', body)
  return data
}

const login = async (body) => {
  try {
    console.log('connecting...')
    const { data } = await api.post('/auth/login', body)
    localStorage.setItem('userInfo', data)
    localStorage.setItem('token', data.token)
    localStorage.setItem('email', body.email)
    return 200
  } catch (error) {
    return error.message
    
  }
}

export {
  register,
  login
}