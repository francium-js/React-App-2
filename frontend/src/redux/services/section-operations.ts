import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import type { SectionCreatePayLoadT } from 'src/redux/types'

import { FETCH_URL } from 'src/constants'

console.log(FETCH_URL)

axios.defaults.baseURL = FETCH_URL

class SectionService {
  get = createAsyncThunk('section/get', async () => {
    const { data } = await axios.get('/section')

    return data
  })

  create = createAsyncThunk('section/create', async (name: string) => {
    const { data } = await axios.post('/section', { name })

    return data
  })

  patch = createAsyncThunk(
    'section/patch',
    async (payload: SectionCreatePayLoadT) => {
      const { data } = await axios.patch(`/section`, payload)

      return data
    },
  )

  remove = createAsyncThunk('section/remove', async (id: string) => {
    const { data } = await axios.delete(`/section/${id}`)

    return data
  })
}

const sectionService = new SectionService()

export default sectionService
