import { Module } from '@nestjs/common';
import { OgpAdapter, IOgpAdapter } from 'src/Adapters/Ogp';
import { OgpController } from 'src/Presentations/Controllers';
import { FetchOgpUseCase } from 'src/Applications/UseCase/Ogp';

@Module({
  imports: [],
  controllers: [OgpController],
  providers: [
    FetchOgpUseCase,
    {
      provide: IOgpAdapter,
      useClass: OgpAdapter,
    },
  ],
})
export class OgpModule {}
