import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OgpModule } from './Modules';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGO_URL || 'mongodb://localhost:27017/wiscro'), OgpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
