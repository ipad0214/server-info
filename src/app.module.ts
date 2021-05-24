import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Logger } from './app.logging';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Logger],
  exports: [],
})
export class AppModule {}
