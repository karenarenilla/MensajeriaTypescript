import Controller from "contrib/interfaces/controller";
import { Request, Response } from "express";
import { Ruta } from "models/mongo/ruta";

export default class implements Controller {
    
    public async findOne(req: Request, res: Response): Promise<Response> {
        const ruta = req.body;
        await Ruta.findOne(ruta);
        return res.send(ruta);
    }

    public async findAll(req: Request, res: Response): Promise<Response> {
        const rutas = await Ruta.find();
        return res.send(rutas);
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const ruta = new Ruta(req.body);
        await ruta.save();
        return res.send(ruta);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const codigo = req.body.codigo;
        const ruta = {
            codigo: req.body.codigo,
            ciudades: req.body.ciudades
        };
        await Ruta.findOneAndUpdate(codigo, `${ruta}`, {new: true});

        return res.send("update");
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const codigo = req.body;
        await Ruta.findOneAndDelete(codigo);
        return res.send("delete");
    }
}