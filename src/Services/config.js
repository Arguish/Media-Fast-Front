import axios from 'axios'

const api = axios.create({
  baseURL: 'https://mf-api.onrender.com/api'
})

export default api