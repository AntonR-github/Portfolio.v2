
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import config from "./2-utils/config";
import catchAll from "./3-middleware/catch-all";
import { RouteNotFoundError } from "./4-models/error-models";
import controller from "./6-controllers/project-controllers";
import expressFileUpload from "express-fileupload";
import authController from "./6-controllers/auth-controllers";
import path from "path";

const Server = express();

if (config.isDevelopment) Server.use(cors());
Server.use(express.json());
Server.use(expressFileUpload());
Server.use("/api", authController);
Server.use("/api", controller);
// sends the index.html file when surfing to root address
Server.use(express.static(path.join(__dirname, "./7-frontend")));

Server.use("*", (request: Request, response: Response, next: NextFunction) => {
    next(new RouteNotFoundError(request.method, request.originalUrl));
});

Server.use(catchAll);

Server.listen(config.port, () => console.log("Listening..."));

