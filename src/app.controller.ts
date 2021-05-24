import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getInfo(@Req() req: Request) {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const buffer = Buffer.from(b64auth, 'base64');
    const [username, password] = buffer.toString('utf-8').split(':');

    let answer = {
      ip: await this.appService.getIp(username, password),
      mincraftStatus: 'online',
    };
    return answer;
  }
}
