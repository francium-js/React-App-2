"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardId = void 0;
const common_1 = require("@nestjs/common");
exports.BoardId = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const boardId = request.headers['boardid'];
    if (!boardId) {
        throw new common_1.BadRequestException('BoardId header is missing');
    }
    return boardId;
});
//# sourceMappingURL=board-id.decorator.js.map