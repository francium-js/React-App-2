import { INestApplication } from '@nestjs/common'
import { agent as request } from 'supertest'
import { Test } from '@nestjs/testing'

import responses from './responses'

import { AppModule } from '../../app.module'

import { Board } from 'src/entities/board.entity'
import { Section } from 'src/entities/section.entity'

describe('SectionController', () => {
  let app: INestApplication
  let board: Board
  let section: Section

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()
    await app.init()

    const { body } = await request(app.getHttpServer())
      .post(`/board`)
      .send({ name: 'Test Board' })

    board = body
  })

  it('/section (POST)', async () => {
    const { statusCode, body } = await request(app.getHttpServer())
      .post(`/section`)
      .send({ boardId: board.id, name: 'Test Section' })
    expect(statusCode).toBe(201)
    expect(body).toEqual({ id: body.id, name: 'Test Section', board })

    section = body
  })

  it('/section (PATCH)', async () => {
    const { statusCode, body } = await request(app.getHttpServer())
      .patch('/section')
      .send({ id: section.id, name: 'New name' })
    expect(statusCode).toBe(200)
    expect(body).toEqual({ id: body.id, name: 'New name' })

    section = body
  })

  it('/section (GET)', async () => {
    const { statusCode, body } = await request(app.getHttpServer())
      .get(`/section/${board.id}`)
      .send()
    expect(statusCode).toBe(200)
    expect(responses.get(body, section.id)).toEqual(section)
  })

  it('/section/:id (DELETE)', async () => {
    await request(app.getHttpServer()).delete(`/section/${section.id}`).expect(200)
  })

  it('Did throw Error if Task not found', async () => {
    await request(app.getHttpServer()).delete(`/board/${board.id}`).expect(200)
    await request(app.getHttpServer()).post(`/section${board.id}`).expect(404)
    await request(app.getHttpServer()).delete(`/section/${section.id}`).expect(404)
  })
})
