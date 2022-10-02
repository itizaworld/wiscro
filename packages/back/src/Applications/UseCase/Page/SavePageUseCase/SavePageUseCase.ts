import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Page } from '@wiscro/common';
import { Model } from 'mongoose';
import { PageDocument } from 'src/Infrastructures/Repositories/PageSchema/PageSchema';

@Injectable()
export class SavePageUseCase {
  constructor(@InjectModel(Page.name) private readonly pageModel: Model<PageDocument>) {}
  /**
   * Page を作成する
   */
  async execute(): Promise<void> {
    try {
      const pages = await this.pageModel.find();
      console.log(pages);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Pageを作成できませんでした',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
