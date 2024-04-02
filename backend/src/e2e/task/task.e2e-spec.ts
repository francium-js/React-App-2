import { INestApplication } from '@nestjs/common'
import { agent as request } from 'supertest'
import { Test } from '@nestjs/testing'

import { AppModule } from '../../app.module'

import taskResponses from './task.responses'
import taskRequest from './task.request'

import { Board } from '../../entities/board.entity'
import { Section } from '../../entities/section.entity'
import { Task } from '../../entities/task.entity'

describe('TaskController', () => {
  let app: INestApplication
  let board: Board
  let section: Section
  let task: Task

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()
    await app.init()

    const boardRes = await request(app.getHttpServer())
      .post(`/board`)
      .send({ name: 'Test Board' })

    const sectionRes = await request(app.getHttpServer())
      .post(`/section`)
      .send({ name: 'Test Section', boardId: boardRes.body.id })

    board = boardRes.body
    section = sectionRes.body
  })

  it('/task (POST)', async () => {
    const { statusCode, body } = await request(app.getHttpServer())
      .post('/task')
      .send(taskRequest.post(section.id))
    expect(statusCode).toBe(201)
    expect(body).toEqual(taskResponses.post(body))

    task = body
  })

  it('/task (PATCH)', async () => {
    const { statusCode, body } = await request(app.getHttpServer())
      .patch('/task')
      .send(taskRequest.patch(task.id, section.id))
    expect(statusCode).toBe(200)
    expect(body).toEqual(taskResponses.patch(body))

    task = body
  })

  it('/task/:id (GET)', async () => {
    const { statusCode, body } = await request(app.getHttpServer()).get(
      `/task/${section.id}`,
    )
    expect(statusCode).toBe(200)
    expect(body).toEqual(taskResponses.getBySectionId(body))
  })

  it('/task/:id (DELETE)', async () => {
    await request(app.getHttpServer()).delete(`/task/${task.id}`).expect(200)
  })

  it('Is everything deleted on the board (CASCAD)', async () => {
    await request(app.getHttpServer()).delete(`/board/${board.id}`).expect(200)
  })

  it('Did throw Error if Task not found', async () => {
    await request(app.getHttpServer()).get(`/task/${section.id}`).expect(404)
    await request(app.getHttpServer()).post('/task').expect(404)
    await request(app.getHttpServer()).delete(`/task/${task.id}`).expect(404)
    await request(app.getHttpServer())
      .patch('/task')
      .send(taskRequest.patch(task.id, section.id))
      .expect(404)
  })
})
