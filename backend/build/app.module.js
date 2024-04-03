"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const section_module_1 = require("./modules/section/section.module");
const task_module_1 = require("./modules/task/task.module");
const history_module_1 = require("./modules/history/history.module");
const board_module_1 = require("./modules/board/board.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'postgres',
                    url: configService.get('POSTGRES_VERCEL_URL'),
                    synchronize: true,
                    entities: [__dirname + '/**/**.entity{.ts,.js}'],
                }),
                inject: [config_1.ConfigService],
            }),
            board_module_1.BoardModule,
            section_module_1.SectionModule,
            task_module_1.TaskModule,
            history_module_1.HistoryModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map