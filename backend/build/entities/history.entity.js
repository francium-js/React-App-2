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
exports.History = void 0;
const typeorm_1 = require("typeorm");
const board_entity_1 = require("./board.entity");
const task_entity_1 = require("./task.entity");
const section_entity_1 = require("./section.entity");
let History = class History {
    setCreatedAt() {
        this.createdAt = new Date().getTime();
    }
};
exports.History = History;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], History.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', array: true }),
    __metadata("design:type", Array)
], History.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", Number)
], History.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => task_entity_1.Task, task => task.history, { onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'task_id' }),
    __metadata("design:type", task_entity_1.Task)
], History.prototype, "task", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => section_entity_1.Section, section => section.history, { onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'section_id' }),
    __metadata("design:type", section_entity_1.Section)
], History.prototype, "section", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => board_entity_1.Board, board => board.history, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'board_id' }),
    __metadata("design:type", board_entity_1.Board)
], History.prototype, "board", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], History.prototype, "setCreatedAt", null);
exports.History = History = __decorate([
    (0, typeorm_1.Entity)()
], History);
//# sourceMappingURL=history.entity.js.map