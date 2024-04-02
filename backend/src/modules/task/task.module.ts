import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { HistoryService } from '../history/history.service'
import { TaskService } from '../task/task.service'

import { TaskController } from '../task/task.controller'

import { Section } from '../../entities/section.entity'
import { History } from '../../entities/history.entity'
import { Task } from '../../entities/task.entity'
import { Board } from '../../entities/board.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Section, Task, History, Board])],
  controllers: [TaskController],
  providers: [TaskService, HistoryService],
})
export class TaskModule {}
