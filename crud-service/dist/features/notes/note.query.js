"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NOTE_QUERY = void 0;
exports.NOTE_QUERY = {
    SELECT_NOTE: "SELECT id, title, content FROM Notes",
    CREATE_NOTE: "INSERT INTO post (title, author, content) VALUES (?, ?, ?)",
    SELECT_NOTE_BY_ID: "SELECT id, title, author, content FROM post WHERE id=?",
    UPDATE_NOTE_BY_ID: "UPDATE post SET title=?, author=?, content=? WHERE id=?",
    DELETE_NOTE_BY_ID: "DELETE FROM post WHERE id=?"
};
//# sourceMappingURL=note.query.js.map