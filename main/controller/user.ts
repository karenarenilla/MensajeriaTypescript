import Controller from "contrib/interfaces/controller";
import { Request, Response } from "express";
import { User } from "models/mongo/user";

export default class implements Controller {
    
    public async findOne(req: Request, res: Response): Promise<Response> {
        const user = await User.findOne(req.body);
        return res.send(user);
    }

    public async findAll(_: Request, res: Response): Promise<Response> {
        const users = await User.find();
        return res.send(users);
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const user = new User(req.body);
        await user.save();
        return res.send(user);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const document = req.body.document;
        const user = {
            document: req.body.document,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        };
        await User.findOneAndUpdate(document, `${user}`, {new: true});
        console.log(document);
        return res.send(user);
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const user = req.body;
        await User.findOneAndDelete(user);
        return res.send("Eliminado");
    }
}