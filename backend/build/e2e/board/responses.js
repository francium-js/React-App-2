"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responses = {
    get: (data, boardId) => {
        return data.find(item => item.id === boardId);
    },
};
exports.default = responses;
//# sourceMappingURL=responses.js.map