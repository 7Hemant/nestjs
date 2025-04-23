import { Module } from '@nestjs/common';
import { PostgresController } from './postgres.controller';
import { PostgresService } from './postgres.service';

@Module({
  imports: [],
  controllers: [PostgresController],
  providers: [PostgresService],
})
export class PostgresModule {}
