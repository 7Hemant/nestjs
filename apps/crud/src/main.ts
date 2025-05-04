import { NestFactory } from '@nestjs/core';
import { CrudModule } from './crud.module';

async function bootstrap() {
  const app = await NestFactory.create(CrudModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
