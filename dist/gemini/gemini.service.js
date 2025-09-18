"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeminiService = void 0;
const common_1 = require("@nestjs/common");
const genai_1 = require("@google/genai");
const GOOGLE_API_KEY = 'AIzaSyAxnWR4xoeTzGQ42UOAMgCuK_8kxW5XFHk';
let GeminiService = class GeminiService {
    constructor() {
        this.genAI = new genai_1.GoogleGenAI({
            apiKey: GOOGLE_API_KEY,
        });
    }
    create(createGeminiDto) {
        return 'This action adds a new gemini';
    }
    findAll() {
        return `This action returns all gemini`;
    }
    findOne(id) {
        return `This action returns a #${id} gemini`;
    }
    update(id, updateGeminiDto) {
        return `This action updates a #${id} gemini`;
    }
    remove(id) {
        return `This action removes a #${id} gemini`;
    }
    async generateContent(query) {
        try {
            const response = await this.genAI.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: query.contents,
            });
            console.log("response----------");
            console.log(response.text);
            return response.text;
        }
        catch (error) {
            console.log("error", error);
            return Promise.reject(error);
        }
    }
};
exports.GeminiService = GeminiService;
exports.GeminiService = GeminiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], GeminiService);
//# sourceMappingURL=gemini.service.js.map