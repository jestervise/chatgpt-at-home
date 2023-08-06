import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('video')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): string {
    return this.appService.getHello();
  }

  @Post()
  createVideo(): string {
    return this.appService.getHello();
  }

  @Delete()
  deleteVideo(): string {
    return this.appService.getHello();
  }

  @Patch()
  updateVideo(): string {
    return this.appService.getHello();
  }
}
