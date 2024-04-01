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
exports.HistoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const history_entity_1 = require("../../entities/history.entity");
const board_entity_1 = require("../../entities/board.entity");
const task_entity_1 = require("../../entities/task.entity");
let HistoryService = class HistoryService {
    constructor(historyRepository, taskRepository, boardRepository) {
        this.historyRepository = historyRepository;
        this.taskRepository = taskRepository;
        this.boardRepository = boardRepository;
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const board = yield this.boardRepository.findOne({
                where: { id },
                relations: ['history'],
            });
            if (!board) {
                throw new common_1.HttpException(`Board with ${id} not found`, common_1.HttpStatus.NOT_FOUND);
            }
            return board.history;
        });
    }
    getByTaskId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield this.taskRepository.findOne({
                where: { id },
                relations: ['history', 'history.task'],
            });
            if (!task) {
                throw new common_1.HttpException(`Task with ${id} not found`, common_1.HttpStatus.NOT_FOUND);
            }
            return task.history;
        });
    }
    createHistory(_a) {
        return __awaiter(this, arguments, void 0, function* ({ board, task, text }) {
            const history = this.historyRepository.create({
                text: text,
                board,
                task,
            });
            return this.historyRepository.save(history);
        });
    }
};
exports.HistoryService = HistoryService;
exports.HistoryService = HistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(history_entity_1.History)),
    __param(1, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __param(2, (0, typeorm_1.InjectRepository)(board_entity_1.Board)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], HistoryService);
//# sourceMappingURL=history.service.js.map