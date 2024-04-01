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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const board_service_1 = require("./board.service");
const get_dto_1 = require("./dtos/get.dto");
const post_dto_1 = require("./dtos/post.dto");
const patch_dto_1 = require("./dtos/patch.dto");
const delete_id_dto_1 = require("./dtos/delete-id.dto");
let BoardController = class BoardController {
    constructor(boardService) {
        this.boardService = boardService;
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.boardService.get();
        });
    }
    create(_a) {
        return __awaiter(this, arguments, void 0, function* ({ name }) {
            return this.boardService.create(name);
        });
    }
    patch(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, name }) {
            yield this.boardService.patch(id, name);
            return { id, name };
        });
    }
    delete(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id }) {
            yield this.boardService.deleteById(id);
            return { id };
        });
    }
};
exports.BoardController = BoardController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all boards' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [get_dto_1.GetBoardResponseDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create new board' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: post_dto_1.PostBoardResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_dto_1.PostBoardBodyDto]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(),
    (0, swagger_1.ApiOperation)({ summary: 'Patch board' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: patch_dto_1.PatchBoardResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [patch_dto_1.PatchBoardBodyDto]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "patch", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete board' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: delete_id_dto_1.DeleteBoardIdResponseDto,
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_id_dto_1.DeleteBoardIdParamsDto]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "delete", null);
exports.BoardController = BoardController = __decorate([
    (0, common_1.Controller)('/board'),
    (0, swagger_1.ApiTags)('Board'),
    __metadata("design:paramtypes", [board_service_1.BoardService])
], BoardController);
//# sourceMappingURL=board.controller.js.map