import { Mongoose, connect } from "mongoose"

export default class MongoConect{
    private static instance: Mongoose;

    public static async getInstance(): Promise<MongoConect> {
        return this.instance || (this.instance = await connect("mongodb://mongo:27017/mensajeria", { useNewUrlParser: true }));
    }
}