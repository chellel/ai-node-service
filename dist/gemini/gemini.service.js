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
            const prompt = `
      请将下面的 JSON 数据处理为满足以下要求的国际化 key：
      key生成规则如下：
      1 使用驼峰命名法，例如 operationLog、downloadTemplate。
      2 理解翻译内容的描述信息，翻译为有意义的英文key。
      3 使用简洁易懂的英文词语，如果信息太长可以用简写的或者缩写的信息输出key，确保key长度不要超过40个字符。
      4 如果中文包含slot1、slot2等，表示变量，请忽略。
      5 请将每个中文分别翻译成英文key，并确保每个key都是唯一不重复。比如 ["取消", "取 消"] 的期望结果是
      {
        "取消": "cancel",
        "取 消": "cancelAction",
        "确定": "confirm"
      }
      返回结构示例：
      返回一个json对象，结构为 { 原始中文:  英文key }，例如：{ "操作日志": "operationLog", ... }。
      JSON内容:
      ['标题', '表单']
      `;
            const response = await this.genAI.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
            });
            console.log("response----------");
            console.log(response);
            console.log(response.text);
            return { text: response.text };
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