import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  satHello(name: string): string {
    return `Hello ${name}`;
  }
}
