import { Application } from "express"
import UserRouter from "./user";
import user from "controller/user";
import PaqueteRouters from "./paquete";
import paquete from "controller/paquete";
import RutaRouter from "./ruta";
import ruta from "controller/ruta";

export default class Routes {
    private version: string;

    constructor(app: Application) {
        this.version = "/api/v1";

        new RutaRouter(this.version, app, new ruta());
        new UserRouter(this.version, app, new user());
        new PaqueteRouters(this.version, app, new paquete());
    
    }
}