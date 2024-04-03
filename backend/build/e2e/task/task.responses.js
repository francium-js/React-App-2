"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taskResponses = {
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
    getBySectionId: (data) => {
        return data.map(({ id, status, title, description, dueDate, priority, section }) => {
            return { id, status, title, description, dueDate, priority, section };
        });
    },
};
exports.default = taskResponses;
//# sourceMappingURL=task.responses.js.map