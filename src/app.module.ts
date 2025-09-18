import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeminiModule } from './gemini/gemini.module';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';

@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
      // 全局可以使用
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
      load: [() => dotenv.config()],
    }),
    GeminiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
