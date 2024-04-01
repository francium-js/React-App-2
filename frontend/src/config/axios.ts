import axios from 'axios'
import { FETCH_URL } from 'src/constants'

const api = axios.create({
  baseURL: FETCH_URL,
})

export default api
