import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  convertKelvinToCelsius(temperature: string) {
    return {temperature: +temperature - 273}
  }
}
