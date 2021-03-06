import { Application } from "express";
import Controller from "contrib/interfaces/controller";
 
export default class UserRouter {
    private controller: Controller;

    constructor(version: string, app: Application, controller: Controller) {
        this.controller = controller;

        app.route(`${version}/user/findOne`)
        .get(this.controller.findOne);

        app.route(`${version}/user`)
        .get(this.controller.findAll)
        .post(this.controller.create)
        .put(this.controller.update)
        .delete(this.controller.delete);
        
    }
}