import { createAsyncThunk } from '@reduxjs/toolkit'

import type { CreateSectionPayLoadT, SectionCreatePayLoadT } from 'src/types/api'
import { FetchEndpoint } from 'src/constants'

import api from 'src/config/axios'

class SectionService {
  create = createAsyncThunk(
    'section/create',
    async (payload: CreateSectionPayLoadT) => {
      const { data } = await api.post(FetchEndpoint.SECTION, payload)

      return data
    },
  )

  patch = createAsyncThunk(
    'section/patch',
    async (payload: SectionCreatePayLoadT) => {
      const { data } = await api.patch(FetchEndpoint.SECTION, payload)

      return data
    },
  )

  get = createAsyncThunk('section/get', async (id: string) => {
    const { data } = await api.get(FetchEndpoint.SECTION + `/${id}`)

    return data
  })

  remove = createAsyncThunk('section/remove', async (id: string) => {
    const { data } = await api.delete(FetchEndpoint.SECTION + `/${id}`)

    return data
  })
}

const sectionService = new SectionService()

export default sectionService
