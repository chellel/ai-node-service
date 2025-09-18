import { Module } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { GeminiController } from './gemini.controller';
import { GoogleGenAI } from "@google/genai";

@Module({
  controllers: [GeminiController],
  providers: [GeminiService],
})
export class GeminiModule {}
