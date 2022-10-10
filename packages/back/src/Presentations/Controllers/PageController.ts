import { Controller, Get } from '@nestjs/common';
import { SavePageUseCase } from 'src/Applications/UseCase/Page';

@Controller('pages')
export class PageController {
  constructor(private readonly savePageUseCase: SavePageUseCase) {}

  @Get('/')
  async get(): Promise<void> {
    await this.savePageUseCase.execute();
  }
}
