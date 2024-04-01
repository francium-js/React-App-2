import { createAsyncThunk } from '@reduxjs/toolkit'

import api from 'src/config/axios'
import { FetchEndpoint } from 'src/constants'

import type { PatchBoardPayloadT } from 'src/types/api'

class BoardService {
  get = createAsyncThunk('board/get', async () => {
    const { data } = await api.get(FetchEndpoint.BOARD)

    return data
  })

  create = createAsyncThunk('board/create', async (name: string) => {
    const { data } = await api.post(FetchEndpoint.BOARD, { name })

    return data
  })

  patch = createAsyncThunk('board/patch', async (payload: PatchBoardPayloadT) => {
    const { data } = await api.patch(FetchEndpoint.BOARD, payload)

    return data
  })

  remove = createAsyncThunk('board/remove', async (id: string) => {
    const { data } = await api.delete(FetchEndpoint.BOARD + `/${id}`)

    return data
  })
}

const boardService = new BoardService()

export default boardService
