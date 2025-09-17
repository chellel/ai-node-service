import { GeminiService } from './gemini.service';
import { CreateGeminiDto } from './dto/create-gemini.dto';
import { UpdateGeminiDto } from './dto/update-gemini.dto';
export declare class GeminiController {
    private readonly geminiService;
    constructor(geminiService: GeminiService);
    create(createGeminiDto: CreateGeminiDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateGeminiDto: UpdateGeminiDto): string;
    remove(id: string): string;
}
