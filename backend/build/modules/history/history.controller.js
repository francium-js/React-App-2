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
exports.HistoryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const history_service_1 = require("./history.service");
const get_dto_1 = require("./dtos/get.dto");
const get_id_dto_1 = require("./dtos/get-id.dto");
let HistoryController = class HistoryController {
    constructor(historyService) {
        this.historyService = historyService;
    }
    getAll(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id }) {
            return this.historyService.get(id);
        });
    }
    getById(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id }) {
            return this.historyService.getByTaskId(id);
        });
    }
};
exports.HistoryController = HistoryController;
__decorate([
    (0, common_1.Get)('/board/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all history' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [get_dto_1.GetHistoryResponseDto],
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_dto_1.GetHistoryParamsDto]),
    __metadata("design:returntype", Promise)
], HistoryController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/task/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get task history' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [get_id_dto_1.GetHistoryIdResponseDto],
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_id_dto_1.GetHistoryIdParamsDto]),
    __metadata("design:returntype", Promise)
], HistoryController.prototype, "getById", null);
exports.HistoryController = HistoryController = __decorate([
    (0, common_1.Controller)('/history'),
    (0, swagger_1.ApiTags)('Task history'),
    __metadata("design:paramtypes", [history_service_1.HistoryService])
], HistoryController);
//# sourceMappingURL=history.controller.js.map