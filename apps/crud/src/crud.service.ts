import { Injectable } from '@nestjs/common';

@Injectable()
export class CrudService {
  getHello(): string {
    return 'crud operation api in nestjs';
  }
}
