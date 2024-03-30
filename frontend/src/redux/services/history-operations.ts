import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { FETCH_URL } from 'src/constants'

axios.defaults.baseURL = FETCH_URL

class HistoryService {
  getById = createAsyncThunk('history/getById', async (id: string) => {
    const { data } = await axios.get(`/history/${id}`)

    return data
  })

  getAll = createAsyncThunk('history/getAll', async () => {
    const { data } = await axios.get('/history')

    return data
  })
}

const historyService = new HistoryService()

export default historyService
