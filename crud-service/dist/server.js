"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_database_1 = require("./config/mysql.database");
const app_route_1 = require("./app.route");
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const app_config_1 = require("./app.config");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
class Server {
    constructor() {
        this.serverPort = Number(process.env.APP_PORT || 3000);
        this.app = (0, express_1.default)();
        this.httpServer = (0, http_1.createServer)(this.app);
        this.io = new socket_io_1.Server(this.httpServer, {
            pingTimeout: 60000,
            cors: {
                origin: ['*']
            }
        });
        this.env = dotenv_1.default.config();
        this.initEnvironment();
        this.initMiddlewares();
        this.initRoutes();
        this.initSockets();
    }
    initEnvironment() {
        (0, app_config_1.appEnvValidate)();
    }
    initMiddlewares() {
        this.app.use((0, cors_1.default)({
            origin: "http://localhost:5173",
            credentials: true
        }));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cookie_parser_1.default)());
    }
    initRoutes() {
        (0, app_route_1.appModuleRoute)(this.app);
        (0, app_route_1.appDefaultRoute)(this.app);
    }
    initSockets() {
        this.io.on('connection', (socket) => {
            console.log('A user connected');
            socket.on('disconnect', () => {
                console.log('User disconnected');
            });
        });
    }
    getServer() {
        return this.app;
    }
    serverListen() {
        return this.getServer().listen(Number(this.serverPort), async () => {
            new mysql_database_1.AppDatabase().openConnection();
            console.log(`App port : ${this.serverPort}`);
            console.log(`App environment : ${process.env.ENV_NAME}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map