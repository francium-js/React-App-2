import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { HistoryService } from 'src/modules/history/history.service'
import { TaskService } from 'src/modules/task/task.service'

import { TaskController } from 'src/modules/task/task.controller'

import { Section } from 'src/entities/section.entity'
import { History } from 'src/entities/history.entity'
import { Task } from 'src/entities/task.entity'
import { Board } from 'src/entities/board.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Section, Task, History, Board])],
  controllers: [TaskController],
  providers: [TaskService, HistoryService],
})
export class TaskModule {}
