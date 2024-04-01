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
exports.PatchTaskResponseDto = exports.PatchTaskBodyDto = void 0;
const class_validator_1 = require("class-validator");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
class PatchTaskBodyDto {
}
exports.PatchTaskBodyDto = PatchTaskBodyDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({ example: '56db67dd-7f14-4667-9fb3-800685ac835b' }),
    __metadata("design:type", String)
], PatchTaskBodyDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({ example: '56db67dd-7f14-4667-9fb3-800685ac835b' }),
    __metadata("design:type", String)
], PatchTaskBodyDto.prototype, "sectionId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, common_1.Optional)(),
    (0, swagger_1.ApiProperty)({ example: 'Create user layout', required: false }),
    __metadata("design:type", String)
], PatchTaskBodyDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, common_1.Optional)(),
    (0, swagger_1.ApiProperty)({ example: 1711485506688, required: false }),
    __metadata("design:type", Number)
], PatchTaskBodyDto.prototype, "dueDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, common_1.Optional)(),
    (0, class_validator_1.IsIn)(['Low', 'Medium', 'High']),
    (0, swagger_1.ApiProperty)({ example: 'Medium', required: false }),
    __metadata("design:type", String)
], PatchTaskBodyDto.prototype, "priority", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, common_1.Optional)(),
    (0, swagger_1.ApiProperty)({
        example: 'Task description should be unambuguration accurate, factual, comprehensible.',
        required: false,
    }),
    __metadata("design:type", String)
], PatchTaskBodyDto.prototype, "description", void 0);
class PatchTaskResponseDto {
}
exports.PatchTaskResponseDto = PatchTaskResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '56db67dd-7f14-4667-9fb3-800685ac835b' }),
    __metadata("design:type", String)
], PatchTaskResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'To do' }),
    __metadata("design:type", String)
], PatchTaskResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Task name' }),
    __metadata("design:type", String)
], PatchTaskResponseDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Task description...' }),
    __metadata("design:type", String)
], PatchTaskResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1434234532643644 }),
    __metadata("design:type", Number)
], PatchTaskResponseDto.prototype, "dueDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Low' }),
    __metadata("design:type", String)
], PatchTaskResponseDto.prototype, "priority", void 0);
//# sourceMappingURL=patch-dto.js.map