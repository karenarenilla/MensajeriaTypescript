import { Typegoose, prop } from "typegoose";

export default class PaqueteSchema extends Typegoose {
    @prop({index: true, unique: true, required: true}) codigo?: string;
    @prop({required: true}) tipo?: string;
    @prop({required: true}) dimensiones?: string[];
    @prop({required: true}) valor?: number;
    @prop({required: true}) peso?: number;
    @prop({required: true}) seguro?: number;
    @prop({required: true}) origen?: string;
    @prop({required: true}) destino?: string;
}
export const Paquete = new PaqueteSchema().getModelForClass(PaqueteSchema);