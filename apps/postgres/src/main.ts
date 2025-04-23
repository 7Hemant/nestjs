import { NestFactory } from '@nestjs/core';
import { PostgresModule } from './postgres.module';

async function bootstrap() {
  const app = await NestFactory.create(PostgresModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
