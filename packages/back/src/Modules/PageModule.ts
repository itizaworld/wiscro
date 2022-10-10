import { Module } from '@nestjs/common';
import { PageController } from 'src/Presentations/Controllers';
import { SavePageUseCase } from 'src/Applications/UseCase/Page';

@Module({
  imports: [],
  controllers: [PageController],
  providers: [SavePageUseCase],
})
export class PageModule {}
