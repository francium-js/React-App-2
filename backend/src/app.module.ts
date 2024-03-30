import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { SectionModule } from 'src/modules/section/section.module'
import { TaskModule } from 'src/modules/task/task.module'
import { HistoryModule } from './modules/history/history.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('POSTGRES_URL'),
        synchronize: true,
        entities: [__dirname + '/**/**.entity{.ts,.js}'],
      }),
      inject: [ConfigService],
    }),
    SectionModule,
    TaskModule,
    HistoryModule,
  ],
})
export class AppModule {}
