import { Controller, Get, Query } from '@nestjs/common';
import { FetchOgpDto } from 'src/Presentations/Dto/Ogp/FetchOgpDto';
import { FetchOgpUseCase } from 'src/Applications/UseCase/Ogp';

@Controller('ogps')
export class OgpController {
  constructor(private readonly fetchOgpUseCase: FetchOgpUseCase) {}

  @Get('/')
  async get(@Query() query: FetchOgpDto): Promise<Record<string, string>> {
    return await this.fetchOgpUseCase.execute(query.url);
  }
}
