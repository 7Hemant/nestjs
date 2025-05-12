import { Body, Controller, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() obj: any) {
    return this.postsService.create(obj);
  }
}
