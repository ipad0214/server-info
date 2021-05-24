import { Injectable } from '@nestjs/common';
import { timeStamp } from 'console';
import * as fs from 'fs';

const pathToFile = 'usernames.json';

@Injectable()
export class Logger {
  public writeUsernameToLog(obj: any) {
    let json: any = this.loadContentFromFile();
    obj.timestamp = new Date();
    json.users.push(timeStamp);
    this.writeToFile(JSON.stringify(json));
  }

  private writeToFile(json: string) {
    fs.writeFileSync(pathToFile, json, 'utf8');
  }

  private loadContentFromFile(): JSON {
    return JSON.parse(fs.readFileSync(pathToFile, 'utf8'));
  }

  public createFileIfNotExists(): void {
    try {
      if (fs.existsSync(pathToFile)) {
        return;
      }
    } catch (err) {
      console.error(err);
    }

    const data = JSON.stringify({
      users: [],
    });

    fs.writeFile('user.json', data, (err) => {
      if (err) {
        throw err;
      }
      console.log('JSON data is saved.');
    });
  }
}
