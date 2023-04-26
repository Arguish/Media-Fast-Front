import api from "./config";

const register = async (body) => {
  const { data } = await api.post('/auth/register', body)
  console.log(data, 'register')
}

const login = async (body) => {
  try {
    console.log('connecting...')
    const { data } = await api.post('/auth/login', body)
    localStorage.setItem('token', data.token)
    return 200
  } catch (error) {
    return error.message
  }
}

export {
  register,
  login
}