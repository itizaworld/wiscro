import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Ogp } from '@wiscro/common';
import { IOgpAdapter } from 'src/Infrastructures/Adapters/Ogp';

@Injectable()
export class FetchOgpUseCase {
  constructor(private readonly ogpAdapter: IOgpAdapter) {}
  /**
   * Ogp を取得する
   * @param url {string} 対象のurl
   */
  async execute(url: string): Promise<Ogp> {
    try {
      return await this.ogpAdapter.fetch(url);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'OGPを取得できませんでした',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
