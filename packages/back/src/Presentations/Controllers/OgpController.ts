import { Controller, Get, Query } from '@nestjs/common';
import { FetchOgpDto } from 'src/Presentations/Dto/Ogp/FetchOgpDto';
import { FetchOgpUseCase } from 'src/UseCase/Ogp';

@Controller('ogps')
export class OgpController {
  constructor(private readonly fetchOgpUseCase: FetchOgpUseCase) {}

  @Get('/')
  async get(@Query() query: FetchOgpDto): Promise<string> {
    console.log(query.url);

    await this.fetchOgpUseCase.execute(query.url);
    console.log('hoge');
    return 'hoge';
  }
}
