import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OgpModule } from './Modules';

@Module({
  imports: [OgpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
