import axios from 'axios'

export const key = '0414227dd8fa8619a8c1530808310554'

// lat={lat}&lon={lon}&appid={API key}

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather'
})

export default api;