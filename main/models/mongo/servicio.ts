import { Typegoose, prop, Ref } from "typegoose";
import PaqueteSchema from "./paquete";
import TransporteSchema from "./transporte";

export default class ServicioSchema extends Typegoose {
    @prop({index: true, unique: true, required: true}) guia?: string;
    @prop({required: true, ref: PaqueteSchema}) paquete?: Ref<PaqueteSchema>;
    @prop({required: true, ref: TransporteSchema}) transporte?: Ref<TransporteSchema>;
    @prop({required: true}) total?: number;
    @prop({required: true}) ubicacion?: number;
    @prop({required: true}) estado?: string;
    @prop({required: true}) paqo?: string;
}
export const Servicio = new ServicioSchema().getModelForClass(ServicioSchema);