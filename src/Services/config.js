import axios from 'axios'

const api = axios.create({
  baseURL: 'https://mf-api.onrender.com/api',
  headers: {
    token: localStorage.getItem('token')
  }
})

export default api