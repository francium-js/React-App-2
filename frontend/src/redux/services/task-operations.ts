import { createAsyncThunk } from '@reduxjs/toolkit'

import type { CreateTaskPayLoadT, UpdatePayLoadT } from 'src/types/api'
import { FetchEndpoint } from 'src/constants'

import api from 'src/config/axios'

class TaskService {
  create = createAsyncThunk('task/create', async (payload: CreateTaskPayLoadT) => {
    const { data } = await api.post(FetchEndpoint.TASK, payload)

    return data
  })

  patch = createAsyncThunk('task/patch', async (payload: UpdatePayLoadT) => {
    const { data } = await api.patch(FetchEndpoint.TASK, payload)

    return data
  })

  get = createAsyncThunk('task/get', async (id: string) => {
    const { data } = await api.get(FetchEndpoint.TASK + `/${id}`)

    return data
  })

  remove = createAsyncThunk('task/delete', async (id: string) => {
    const { data } = await api.delete(FetchEndpoint.TASK + `/${id}`)

    return data
  })
}

const taskService = new TaskService()

export default taskService
