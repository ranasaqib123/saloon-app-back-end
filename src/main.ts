import { NestFactory } from '@nestjs/core';
import {NestExpressApplication} from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { doc } from 'prettier';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors()
  // @ts-ignore
  app.useStaticAssets(
    join(__dirname, '..', '..', 'uploads' ),
    {
      prefix: '/uploads/'
    }
  )
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
