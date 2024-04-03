"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responses = {
    post: ({ id, status, section }) => {
        return {
            id,
            title: 'SuperTest POST',
            description: 'SuperTest POST',
            status,
            dueDate: 1711485506688,
            priority: 'Low',
            section,
        };
    },
    patch: ({ id, status, section }) => {
        return {
            id,
            status,
            title: 'SuperTest PATCH',
            description: 'SuperTest PATCH',
            dueDate: '1711485506688',
            priority: 'Medium',
            section,
        };
    },
    getBySectionId: (data, taskId) => {
        return data.find(item => item.id === taskId);
    },
};
exports.default = responses;
//# sourceMappingURL=responses.js.map