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
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const task_service_1 = require("./task.service");
const post_dto_1 = require("./dtos/post.dto");
const patch_dto_1 = require("./dtos/patch-dto");
const get_id_dto_1 = require("./dtos/get-id.dto");
const delete_id_dto_1 = require("./dtos/delete-id.dto");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.taskService.create(data);
        });
    }
    patch(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.taskService.patch(data);
        });
    }
    get(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id }) {
            const result = yield this.taskService.get(id);
            return result;
        });
    }
    delete(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id }) {
            yield this.taskService.deleteById(id);
            return { id };
        });
    }
};
exports.TaskController = TaskController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create task' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: post_dto_1.PostResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_dto_1.PostBodyDto]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(),
    (0, swagger_1.ApiOperation)({ summary: 'Patch task' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: patch_dto_1.PatchTaskResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [patch_dto_1.PatchTaskBodyDto]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "patch", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tasks from section' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [get_id_dto_1.GetTaskIdResponseDto],
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_id_dto_1.GetTaskIdParamsDto]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "get", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete task' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: delete_id_dto_1.DeleteTaskResponseDto,
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_id_dto_1.DeleteTaskIdParamsDto]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "delete", null);
exports.TaskController = TaskController = __decorate([
    (0, common_1.Controller)('/task'),
    (0, swagger_1.ApiTags)('Task'),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
//# sourceMappingURL=task.controller.js.map