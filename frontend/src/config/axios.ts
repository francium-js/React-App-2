import axios from 'axios'

import type { AxiosError } from 'axios'

import { FETCH_URL } from 'src/constants'

import { badToast } from 'src/lib/toastify'

const api = axios.create({
  baseURL: FETCH_URL,
})

api.interceptors.response.use(
  response => {
    return response
  },
  (error: AxiosError) => {
    if (error.response) {
      const { status } = error.response

      if (status >= 400 && status < 500) {
        badToast('Client error:')
      } else if (status >= 500) {
        badToast('Server error:')
      }
    } else {
      badToast('Network error:')
    }

    throw error
  },
)

export default api
