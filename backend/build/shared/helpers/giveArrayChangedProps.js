"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.giveArrayChangedProps = void 0;
const formatDate = (milliseconds) => {
    const date = new Date(Number(milliseconds));
    const dayOfWeek = date.toLocaleString('en', { weekday: 'short' }).slice(0, 3);
    const dayOfMonth = date.getDate();
    const month = date.toLocaleString('en', { month: 'short' }).slice(0, 3);
    return `${dayOfWeek}, ${dayOfMonth} ${month}`;
};
const giveArrayChangedProps = (task, data) => {
    const { title, status, dueDate, priority, description } = data;
    const result = ['Changed params:'];
    if (title !== task.title) {
        result.push(`Title: ${task.title} > ${title}`);
    }
    if (status !== task.status) {
        result.push(`Status: ${task.status} > ${status}`);
    }
    if (String(dueDate) !== String(task.dueDate)) {
        result.push(`DueDate: ${formatDate(task.dueDate)} > ${formatDate(dueDate)}`);
    }
    if (priority !== task.priority) {
        result.push(`Priority: ${task.priority} > ${priority}`);
    }
    if (description !== task.description) {
        result.push(`Description: ${task.description.slice(0, 20)} > ${description.slice(0, 20)}`);
    }
    return result;
};
exports.giveArrayChangedProps = giveArrayChangedProps;
//# sourceMappingURL=giveArrayChangedProps.js.map