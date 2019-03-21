import Controller from "contrib/interfaces/controller";
import { Request, Response } from "express";
import { Paquete } from "models/mongo/paquete";

export default class implements Controller {
    
    public async findOne(req: Request, res: Response): Promise<Response> {
        const paquete = req.body;
        await Paquete.findOne(paquete);
        return res.send(paquete);
    }

    public async findAll(req: Request, res: Response): Promise<Response> {
        const paquetes = await Paquete.find();
        return res.send(paquetes);
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const paquete = new Paquete(req.body);
        await paquete.save();
        return res.send(paquete);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const codigo = req.body.codigo;
        const paquete = {
            codigo: req.body.codigo,
            tipo: req.body.tipo,
	        dimensiones: req.body.dimensiones,
	        valor: req.body.valor,
	        peso: req.body.peso,
	        seguro: req.body.seguro,
	        origen: req.body.origen,
	        destino: req.body.destino
        };
        await Paquete.findOneAndUpdate(codigo, `${paquete}`, {new: true});
        return res.send("update");
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const codigo = req.body;
        await Paquete.findOneAndDelete(codigo);
        return res.send("Delete");
    }
}