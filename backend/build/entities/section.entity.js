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
exports.Section = void 0;
const typeorm_1 = require("typeorm");
const task_entity_1 = require("./task.entity");
const board_entity_1 = require("./board.entity");
const history_entity_1 = require("./history.entity");
let Section = class Section {
};
exports.Section = Section;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Section.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Section.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => task_entity_1.Task, task => task.section, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Section.prototype, "tasks", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => history_entity_1.History, history => history.section),
    __metadata("design:type", Array)
], Section.prototype, "history", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'board_id', referencedColumnName: 'id' }),
    (0, typeorm_1.ManyToOne)(() => board_entity_1.Board, board => board.sections, { onDelete: 'CASCADE' }),
    __metadata("design:type", board_entity_1.Board)
], Section.prototype, "board", void 0);
exports.Section = Section = __decorate([
    (0, typeorm_1.Entity)()
], Section);
//# sourceMappingURL=section.entity.js.map