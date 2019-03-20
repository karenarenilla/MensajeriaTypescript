import { Application } from "express"
import UserRouter from "./user";
import user from "controller/user";

export default class Routes {
    private version: string;

    constructor(app: Application) {
        this.version = "/api/v1";
        new UserRouter(this.version, app, new user());
        
    }
}