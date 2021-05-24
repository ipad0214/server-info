import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as pubIp from 'public-ip';
import { Logger } from './app.logging';

@Injectable()
export class AppService {
  constructor(private logger: Logger) {}

  public async getIp(username: string, password: string): Promise<string> {
    let access: any = {
      username: username,
    };
    if (password !== 'M!n3Cr4Ft!#') {
      access.granted = false;
      throw new UnauthorizedException({
        status: 'Unauthorzied',
        msg: 'Wrong password',
      });
    }

    this.logger.writeUsernameToLog(access);
    return await pubIp.v4();
  }
}
