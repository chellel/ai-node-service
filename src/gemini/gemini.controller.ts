import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { CreateGeminiDto } from './dto/create-gemini.dto';
import { UpdateGeminiDto } from './dto/update-gemini.dto';
import { ApiTags, ApiConsumes, ApiOperation, ApiBody } from "@nestjs/swagger";
import { DescriptionDto } from './dto/gemini.dto';

@Controller('gemini')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}

  @Post()
  create(@Body() createGeminiDto: CreateGeminiDto) {
    return this.geminiService.create(createGeminiDto);
  }

  @Get()
  findAll() {
    return this.geminiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.geminiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGeminiDto: UpdateGeminiDto) {
    return this.geminiService.update(+id, updateGeminiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.geminiService.remove(+id);
  }

  @Post("getGeminiContent")
  @ApiOperation({ summary: "调用gemini能力" })
  async getGeminiContent(@Body() body): Promise<any> {
    return this.geminiService.generateContent(body);
    // return {
    //   code: 0,
    //   message: 'ok',
    //   data: {
    //     // name: query.name,
    //   },
    // };
  }

  
}
