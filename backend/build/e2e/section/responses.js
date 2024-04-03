"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responses = {
    get: (data, sectionId) => {
        return data.find(item => item.id === sectionId);
    },
};
exports.default = responses;
//# sourceMappingURL=responses.js.map