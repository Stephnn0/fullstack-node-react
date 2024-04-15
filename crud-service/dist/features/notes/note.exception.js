"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNoteException = exports.getNotesException = exports.getNoteByIdException = exports.deleteNoteException = exports.createNoteException = void 0;
const client_error_1 = require("../../shared/client.error");
const server_error_1 = require("../../shared/server.error");
const getNotesException = (error) => {
    throw new server_error_1.InternalServeError(error);
};
exports.getNotesException = getNotesException;
const getNoteByIdException = (noteId, error) => {
    if (error instanceof client_error_1.NotFound) {
        throw new client_error_1.NotFound(`The note with the id "${noteId}" not found.`);
    }
    else {
        throw new server_error_1.InternalServeError(error);
    }
};
exports.getNoteByIdException = getNoteByIdException;
const createNoteException = (error) => {
    throw new server_error_1.InternalServeError(error);
};
exports.createNoteException = createNoteException;
const updateNoteException = (noteId, error) => {
    if (error instanceof client_error_1.NotFound) {
        throw new client_error_1.NotFound(`The post with the id "${noteId}" not found.`);
    }
    else {
        throw new server_error_1.InternalServeError(error);
    }
};
exports.updateNoteException = updateNoteException;
const deleteNoteException = (noteId, error) => {
    if (error instanceof client_error_1.NotFound) {
        throw new client_error_1.NotFound(`The post with the id "${noteId}" not found.`);
    }
    else {
        throw new server_error_1.InternalServeError(error);
    }
};
exports.deleteNoteException = deleteNoteException;
//# sourceMappingURL=note.exception.js.map