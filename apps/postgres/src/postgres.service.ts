import { Injectable } from '@nestjs/common';

@Injectable()
export class PostgresService {
  getHello(): string {
    return 'Hello World!';
  }
}
