import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getBlubb(): string {
    return 'blubb';
  }

  @Get()
  getBlob(): string {
    return 'blob';
  }
}
