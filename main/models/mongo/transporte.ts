import { Typegoose, prop } from "typegoose";

export default class TransporteSchema extends Typegoose {
    @prop({index: true, unique: true, required: true}) codigo?: string;
    @prop({required: true}) tipo?: string;
    @prop({required: true}) descripcio?: string;
    
}
export const Transporte = new TransporteSchema().getModelForClass(TransporteSchema);
