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
exports.SectionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const section_entity_1 = require("../../entities/section.entity");
const history_service_1 = require("../history/history.service");
let SectionService = class SectionService {
    constructor(sectionRepository, historyService) {
        this.sectionRepository = sectionRepository;
        this.historyService = historyService;
    }
    create(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdSection = yield this.sectionRepository.save({
                name,
            });
            this.historyService.createSectionHistory(createdSection, [
                `Section "${createdSection.name}" created`,
            ]);
            return createdSection;
        });
    }
    patch(id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const section = yield this.sectionRepository.findOne({
                where: { id },
            });
            if (!section) {
                throw new common_1.HttpException(`Section with id ${id} not found`, common_1.HttpStatus.NOT_FOUND);
            }
            yield this.sectionRepository.update({ id: id }, { name });
            yield this.historyService.createSectionHistory(section, [
                `Section "${name}" renamed to ${section.name}`,
            ]);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sectionRepository.findOne({
                where: { id },
                relations: ['tasks'],
            });
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const section = yield this.sectionRepository.findOne({
                where: { id },
            });
            if (!section) {
                throw new common_1.HttpException(`Section with id ${id} not found`, common_1.HttpStatus.NOT_FOUND);
            }
            yield this.sectionRepository.delete(id);
            yield this.historyService.createSectionHistory(section, [
                `Section "${section.name}" deleted`,
            ]);
        });
    }
};
exports.SectionService = SectionService;
exports.SectionService = SectionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(section_entity_1.Section)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        history_service_1.HistoryService])
], SectionService);
//# sourceMappingURL=section.service.js.map