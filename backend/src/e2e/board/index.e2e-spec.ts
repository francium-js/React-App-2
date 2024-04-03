import { INestApplication } from '@nestjs/common'
import { agent as request } from 'supertest'
import { Test } from '@nestjs/testing'

import responses from './responses'

import { AppModule } from 'src/app.module'
import { Board } from 'src/entities/board.entity'

describe('BoardController', () => {
  let app: INestApplication
  let board: Board

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()
    await app.init()
  })

  it('/task (POST)', async () => {
    const { statusCode, body } = await request(app.getHttpServer())
      .post('/board')
      .send({ name: 'Test Board' })
    expect(statusCode).toBe(201)
    expect(body).toEqual({ id: body.id, name: 'Test Board' })

    board = body
  })

  it('/board (PATCH)', async () => {
    const { statusCode, body } = await request(app.getHttpServer())
      .patch('/board')
      .send({ id: board.id, name: 'New name' })
    expect(statusCode).toBe(200)
    expect(body).toEqual({ id: board.id, name: 'New name' })

    board = body
  })

  it('/board (GET)', async () => {
    const { statusCode, body } = await request(app.getHttpServer())
      .get('/board')
      .send()
    expect(statusCode).toBe(200)
    expect(responses.get(body, board.id)).toEqual(board)
  })

  it('/board/:id (DELETE)', async () => {
    await request(app.getHttpServer()).delete(`/board/${board.id}`).expect(200)
  })

  it('Did throw Error if Board not found', async () => {
    await request(app.getHttpServer()).delete(`/board/${board.id}`).expect(404)
    await request(app.getHttpServer())
      .patch('/board')
      .send({ id: board.id, name: 'New name' })
      .expect(404)
  })
})
