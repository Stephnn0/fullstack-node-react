"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteRoute = void 0;
const express_1 = require("express");
const note_controller_1 = require("./note.controller");
class NoteRoute {
    constructor() {
        this.path = "/v1/post";
        this.router = (0, express_1.Router)();
        this.controller = new note_controller_1.NoteController();
        this.initRoute();
    }
    initRoute() {
        this.router.get(this.path, this.controller.getNotes);
    }
}
exports.NoteRoute = NoteRoute;
//# sourceMappingURL=note.route.js.map