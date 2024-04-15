"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteService = void 0;
const mysql_config_1 = require("../../config/mysql.config");
const note_exception_1 = require("./note.exception");
const note_query_1 = require("./note.query");
class NoteService {
    async getNotes() {
        try {
            const pool = await (0, mysql_config_1.MySqlPool)();
            const rawSql = note_query_1.NOTE_QUERY.SELECT_NOTE;
            const resultGetNotes = await pool.query(rawSql);
            return resultGetNotes[0];
        }
        catch (error) {
            (0, note_exception_1.getNotesException)(error);
        }
    }
    getNoteById(noteId) {
        throw new Error("Method not implemented.");
    }
    createNote(note) {
        throw new Error("Method not implemented.");
    }
    updateNote(note) {
        throw new Error("Method not implemented.");
    }
    deleteNote(noteId) {
        throw new Error("Method not implemented.");
    }
}
exports.NoteService = NoteService;
//# sourceMappingURL=note.service.js.map