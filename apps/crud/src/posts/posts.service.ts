import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  create(obj: any) {
    return { message: 'successful', obj: obj };
  }
}
