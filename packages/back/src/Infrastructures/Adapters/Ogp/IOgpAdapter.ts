import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class IOgpAdapter {
  abstract fetch(url: string): Promise<{ [key: string]: string }>;
}
