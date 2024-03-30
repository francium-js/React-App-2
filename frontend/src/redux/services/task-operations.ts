import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import type { AddNewCardPayLoadT, UpdateCardPayLoadT } from 'src/redux/types'

import { FETCH_URL } from 'src/constants'

axios.defaults.baseURL = FETCH_URL

class TaskService {
  get = createAsyncThunk('task/get', async (id: string) => {
    const { data } = await axios.get(`/task/${id}`)

    return data
  })

  create = createAsyncThunk('task/create', async (payload: AddNewCardPayLoadT) => {
    const { data } = await axios.post('/task', payload)

    return data
  })

  patch = createAsyncThunk('task/patch', async (payload: UpdateCardPayLoadT) => {
    const { data } = await axios.patch(`/task`, payload)

    return data
  })

  remove = createAsyncThunk('task/delete', async (id: string) => {
    const { data } = await axios.delete(`/task/${id}`)

    return data
  })
}

const taskService = new TaskService()

export default taskService
