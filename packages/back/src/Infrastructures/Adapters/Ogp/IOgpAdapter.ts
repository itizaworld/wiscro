import { Injectable } from '@nestjs/common';
import { Ogp } from '@wiscro/common';

@Injectable()
export abstract class IOgpAdapter {
  abstract fetch(url: string): Promise<Ogp>;
}
