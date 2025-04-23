import { Controller, Get } from '@nestjs/common';
import { PostgresService } from './postgres.service';

@Controller()
export class PostgresController {
  constructor(private readonly postgresService: PostgresService) {}

  @Get()
  getHello(): string {
    return this.postgresService.getHello();
  }
}
