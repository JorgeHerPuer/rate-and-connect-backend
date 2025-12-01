import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly configService: ConfigService) { } // this.configService.get('database.x') to access .env data in config.ts

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
