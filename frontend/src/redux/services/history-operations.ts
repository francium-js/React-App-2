import { createAsyncThunk } from '@reduxjs/toolkit'
import { FetchEndpoint } from 'src/constants'

import api from 'src/config/axios'

class HistoryService {
  getById = createAsyncThunk('history/getById', async (id: string) => {
    const { data } = await api.get(FetchEndpoint.HISTORY_TASK + `/${id}`)

    return data
  })

  getAll = createAsyncThunk('history/getAll', async (id: string) => {
    const { data } = await api.get(FetchEndpoint.HISTORY_BOARD + `/${id}`)

    return data
  })
}

const historyService = new HistoryService()

export default historyService
