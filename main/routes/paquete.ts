import { Application } from "express";
import Controller from "contrib/interfaces/controller";
 
export default class PaqueteRouter {
    private controller: Controller;

    constructor(version: string, app: Application, controller: Controller) {
        this.controller = controller;

        app.route(`${version}/paquete/findOne`)
        .get(this.controller.findOne);

        app.route(`${version}/paquete`)
        .get(this.controller.findAll)
        .post(this.controller.create)
        .put(this.controller.update)
        .delete(this.controller.delete);
        
    }
}