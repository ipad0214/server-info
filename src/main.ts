import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {
  try {
    if (fs.existsSync('usernames.json')) {
      return;
    }
  } catch (err) {
    console.error(err);
  }

  const data = JSON.stringify({
    users: [],
  });

  fs.writeFile('usernames.json', data, (err) => {
    if (err) {
      throw err;
    }
    console.log('JSON data is saved.');
  });

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
