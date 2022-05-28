import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('k2c')
  convertKelvinToCelsius(@Query('temperature') temperature: string) {
    return this.appService.convertKelvinToCelsius(temperature)
  }
}
