"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheckController = void 0;
const success_response_1 = require("../../shared/response/success/success.response");
class HealthCheckController {
    constructor() {
        this.getHealth = (request, response) => {
            (0, success_response_1.SuccessOk)(response, { status: "healthy" });
        };
    }
}
exports.HealthCheckController = HealthCheckController;
//# sourceMappingURL=health.controller.js.map