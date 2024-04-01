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
exports.GetHistoryResponseDto = exports.GetHistoryParamsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const section_entity_1 = require("../../../entities/section.entity");
const board_entity_1 = require("../../../entities/board.entity");
const task_entity_1 = require("../../../entities/task.entity");
const class_validator_1 = require("class-validator");
class GetHistoryParamsDto {
}
exports.GetHistoryParamsDto = GetHistoryParamsDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({ example: '56db67dd-7f14-4667-9fb3-800685ac835b' }),
    __metadata("design:type", String)
], GetHistoryParamsDto.prototype, "id", void 0);
class GetHistoryResponseDto {
}
exports.GetHistoryResponseDto = GetHistoryResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '56db67dd-7f14-4667-9fb3-800685ac835b' }),
    __metadata("design:type", String)
], GetHistoryResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['Tack created'] }),
    __metadata("design:type", Array)
], GetHistoryResponseDto.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1434234532643644 }),
    __metadata("design:type", Number)
], GetHistoryResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => task_entity_1.Task, nullable: true }),
    __metadata("design:type", task_entity_1.Task)
], GetHistoryResponseDto.prototype, "task", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => section_entity_1.Section, nullable: true }),
    __metadata("design:type", section_entity_1.Section)
], GetHistoryResponseDto.prototype, "section", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => board_entity_1.Board, nullable: true }),
    __metadata("design:type", board_entity_1.Board)
], GetHistoryResponseDto.prototype, "board", void 0);
//# sourceMappingURL=get.dto.js.map