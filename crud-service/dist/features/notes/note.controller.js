"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteController = void 0;
const note_service_1 = require("./note.service");
const note_exception_1 = require("./note.exception");
const success_response_1 = require("../../shared/response/success/success.response");
class NoteController {
    constructor() {
        this.getNotes = async (request, response) => {
            try {
                console.log('hit');
                const resultGetNotes = await this.noteService.getNotes();
                (0, success_response_1.SuccessOk)(response, resultGetNotes);
            }
            catch (error) {
                (0, note_exception_1.getNotesException)(error);
            }
        };
        this.noteService = new note_service_1.NoteService();
    }
}
exports.NoteController = NoteController;
//# sourceMappingURL=note.controller.js.map