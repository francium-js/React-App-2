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
exports.PostBoardResponseDto = exports.PostBoardBodyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class PostBoardBodyDto {
}
exports.PostBoardBodyDto = PostBoardBodyDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'To do' }),
    __metadata("design:type", String)
], PostBoardBodyDto.prototype, "name", void 0);
class PostBoardResponseDto {
}
exports.PostBoardResponseDto = PostBoardResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '56db67dd-7f14-4667-9fb3-800685ac835b' }),
    __metadata("design:type", String)
], PostBoardResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'My board task project' }),
    __metadata("design:type", String)
], PostBoardResponseDto.prototype, "name", void 0);
//# sourceMappingURL=post.dto.js.map