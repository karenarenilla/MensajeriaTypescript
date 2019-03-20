import Controller from "contrib/interfaces/controller";
import { Request, Response } from "express";

export default class implements Controller {
    
    public async findOne(req: Request, res: Response): Promise<Response> {
        return res.send("rutas");
    }

    public async findAll(req: Request, res: Response): Promise<Response> {
        return res.send("rutas");
    }

    public async create(req: Request, res: Response): Promise<Response> {
        return res.send("rutas");
    }

    public async update(req: Request, res: Response): Promise<Response> {
        return res.send("rutas");
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        return res.send("rutas");
    }
}