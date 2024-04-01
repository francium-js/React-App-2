import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { SectionModule } from 'src/modules/section/section.module'
import { TaskModule } from 'src/modules/task/task.module'
import { HistoryModule } from './modules/history/history.module'
import { BoardModule } from './modules/board/board.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('LOCAL_HOST'),
        port: configService.get('LOCAL_DB_PORT'),
        username: configService.get('LOCAL_USERNAME'),
        password: configService.get('LOCAL_PASSWORD'),
        database: configService.get('LOCAL_DB_NAME'),
        synchronize: true,
        entities: [__dirname + '/**/**.entity{.ts,.js}'],
      }),
      inject: [ConfigService],
    }),
    BoardModule,
    SectionModule,
    TaskModule,
    HistoryModule,
  ],
})
export class AppModule {}
