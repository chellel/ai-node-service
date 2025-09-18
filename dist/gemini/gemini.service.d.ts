import { CreateGeminiDto } from './dto/create-gemini.dto';
import { UpdateGeminiDto } from './dto/update-gemini.dto';
export declare class GeminiService {
    private genAI;
    constructor();
    create(createGeminiDto: CreateGeminiDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGeminiDto: UpdateGeminiDto): string;
    remove(id: number): string;
    generateContent(query: any): Promise<any>;
}
