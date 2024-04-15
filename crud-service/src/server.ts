import { AppDatabase } from "./config/mysql.database"
import { appDefaultRoute, appModuleRoute } from "./app.route"
import { createServer, Server as HttpServer } from 'http'
import { Server as SocketIoServer } from 'socket.io'
import { appEnvValidate } from "./app.config";

import cors from "cors"
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

// app.exception

class Server {
  serverPort = Number(process.env.APP_PORT || 3000);
  app: express.Application;
  env: dotenv.DotenvConfigOutput
  httpServer: HttpServer;
  io: SocketIoServer;


  constructor() {
    this.app = express();
    this.httpServer = createServer(this.app);

    this.io = new SocketIoServer(this.httpServer, {
      pingTimeout: 60000,
      cors: {
        origin: ['*']
      }
    });

    this.env = dotenv.config()
    this.initEnvironment();
    this.initMiddlewares();
    this.initRoutes();
    this.initSockets(); 
  }


  //ENVIROMENTAL VARIABLES
  initEnvironment() {
    appEnvValidate();
  }

  //EXTERNAL MIDDLEWARES
  initMiddlewares() {
    this.app.use(cors({
      origin: "http://localhost:5173",
      credentials: true
    }));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser())
  }

  //SERVER ROUTES
  initRoutes() {
    appModuleRoute(this.app);
    appDefaultRoute(this.app);
  }

  //WEBSOCKETS
  initSockets() {
    this.io.on('connection', (socket) => {
      console.log('A user connected');

      // Add your WebSocket event handlers here

      socket.on('disconnect', () => {
        console.log('User disconnected');
      });
    });
  }

  //INITIALIZED SERVER
  getServer() {
    return this.app;
  }

  //SERVER LISTENING
  serverListen() {
    return this.getServer().listen(Number(this.serverPort), async () => {
      new AppDatabase().openConnection();
      console.log(`App port : ${this.serverPort}`);
      console.log(`App environment : ${process.env.ENV_NAME}`);
    });
  }

}

export default Server;
