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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const section_entity_1 = require("../../entities/section.entity");
const task_entity_1 = require("../../entities/task.entity");
const history_service_1 = require("../history/history.service");
const giveArrayChangedProps_1 = require("../../shared/helpers/giveArrayChangedProps");
let TaskService = class TaskService {
    constructor(sectionRepository, taskRepository, historyService) {
        this.sectionRepository = sectionRepository;
        this.taskRepository = taskRepository;
        this.historyService = historyService;
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const section = yield this.sectionRepository.findOne({
                where: { id },
                relations: ['tasks', 'tasks.section'],
            });
            if (!section) {
                throw new common_1.HttpException(`Section with ${id} not found`, common_1.HttpStatus.NOT_FOUND);
            }
            return section.tasks;
        });
    }
    create(_a) {
        return __awaiter(this, void 0, void 0, function* () {
            var { sectionId } = _a, props = __rest(_a, ["sectionId"]);
            const section = yield this.sectionRepository.findOne({
                where: { id: sectionId },
            });
            if (!section) {
                throw new common_1.HttpException(`Board section with id ${sectionId} not found`, common_1.HttpStatus.NOT_FOUND);
            }
            const createdTask = this.taskRepository.create(Object.assign(Object.assign({}, props), { status: section.name, section }));
            const savedTask = yield this.taskRepository.save(createdTask);
            yield this.historyService.createTaskHistory(savedTask, [
                `Task "${savedTask.title}" created`,
            ]);
            return savedTask;
        });
    }
    patch(_a) {
        return __awaiter(this, void 0, void 0, function* () {
            var { id, sectionId } = _a, rest = __rest(_a, ["id", "sectionId"]);
            const task = yield this.taskRepository.findOne({ where: { id } });
            if (!task) {
                throw new common_1.HttpException(`Task with id ${id} not found`, common_1.HttpStatus.NOT_FOUND);
            }
            const section = yield this.sectionRepository.findOne({
                where: { id: sectionId },
            });
            if (!task) {
                throw new common_1.HttpException(`Task with id ${id} not found`, common_1.HttpStatus.NOT_FOUND);
            }
            const text = (0, giveArrayChangedProps_1.giveArrayChangedProps)(task, Object.assign(Object.assign({}, rest), { status: section.name }));
            yield this.historyService.createTaskHistory(task, text);
            yield this.taskRepository.update({ id }, Object.assign(Object.assign({}, rest), { section, status: section.name }));
            return this.taskRepository.findOne({
                where: { id },
                relations: ['section'],
            });
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield this.taskRepository.findOne({ where: { id } });
            if (!task) {
                throw new common_1.HttpException(`Task with id ${id} not found`, common_1.HttpStatus.NOT_FOUND);
            }
            yield this.taskRepository.delete(id);
            yield this.historyService.createTaskHistory(task, [
                `Task "${task.title}" deleted`,
            ]);
        });
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(section_entity_1.Section)),
    __param(1, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        history_service_1.HistoryService])
], TaskService);
//# sourceMappingURL=task.service.js.map