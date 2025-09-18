import { Injectable } from '@nestjs/common';
import { CreateGeminiDto } from './dto/create-gemini.dto';
import { UpdateGeminiDto } from './dto/update-gemini.dto';
import { GoogleGenAI } from '@google/genai';

const GOOGLE_API_KEY = 'AIzaSyAxnWR4xoeTzGQ42UOAMgCuK_8kxW5XFHk';

@Injectable()
export class GeminiService {
  private genAI;

  constructor() {
    this.genAI = new GoogleGenAI({
      apiKey: GOOGLE_API_KEY,
    });
  }

  create(createGeminiDto: CreateGeminiDto) {
    return 'This action adds a new gemini';
  }

  findAll() {
    return `This action returns all gemini`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gemini`;
  }

  update(id: number, updateGeminiDto: UpdateGeminiDto) {
    return `This action updates a #${id} gemini`;
  }

  remove(id: number) {
    return `This action removes a #${id} gemini`;
  }

  async generateContent(query: { contents: string }): Promise<any> {
    try {
      // const { parts = [], generationConfig = {} } = query;

      // const model = this.genAI.getGenerativeModel({ model: MODEL_1_5_FLASH });
      // const chatSession = model.startChat({
      //   generationConfig: {
      //     ...this.generationConfig,
      //     ...generationConfig,
      //   },
      //   safetySettings: this.safetySettings,
      //   history: [
      //     {
      //       role: "user",
      //       parts
      //     },
      //   ],
      // });

      // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
      const response = await this.genAI.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: query.contents,
      });

      console.log("response----------")
      console.log(response.text)
      // const response = result.response;
      return response.text;
    } catch (error) {
      console.log("error", error)
      return Promise.reject(error);
    }
  }
}
