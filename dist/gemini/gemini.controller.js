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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeminiController = void 0;
const common_1 = require("@nestjs/common");
const gemini_service_1 = require("./gemini.service");
const create_gemini_dto_1 = require("./dto/create-gemini.dto");
const update_gemini_dto_1 = require("./dto/update-gemini.dto");
const swagger_1 = require("@nestjs/swagger");
let GeminiController = class GeminiController {
    constructor(geminiService) {
        this.geminiService = geminiService;
    }
    create(createGeminiDto) {
        return this.geminiService.create(createGeminiDto);
    }
    findAll() {
        return this.geminiService.findAll();
    }
    findOne(id) {
        return this.geminiService.findOne(+id);
    }
    update(id, updateGeminiDto) {
        return this.geminiService.update(+id, updateGeminiDto);
    }
    remove(id) {
        return this.geminiService.remove(+id);
    }
    async getGeminiContent(body) {
        return this.geminiService.generateContent(body);
    }
};
exports.GeminiController = GeminiController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gemini_dto_1.CreateGeminiDto]),
    __metadata("design:returntype", void 0)
], GeminiController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GeminiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GeminiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_gemini_dto_1.UpdateGeminiDto]),
    __metadata("design:returntype", void 0)
], GeminiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GeminiController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)("getGeminiContent"),
    (0, swagger_1.ApiOperation)({ summary: "调用gemini能力" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GeminiController.prototype, "getGeminiContent", null);
exports.GeminiController = GeminiController = __decorate([
    (0, common_1.Controller)('gemini'),
    __metadata("design:paramtypes", [gemini_service_1.GeminiService])
], GeminiController);
//# sourceMappingURL=gemini.controller.js.map