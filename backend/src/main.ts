import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = app.get(ConfigService)

  app.enableCors({
    origin: [config.get('CLIENT_URL'), 'http://localhost:3001'],
    credentials: true,
  })

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      stopAtFirstError: true,
    }),
  )

  const swagger = new DocumentBuilder()
    .setTitle('Faktastisch API')
    .setVersion('1.0')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, swagger)
  SwaggerModule.setup('api', app, document)

  await app.listen(8080)
}
bootstrap()
