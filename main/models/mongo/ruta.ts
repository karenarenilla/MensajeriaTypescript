import { Typegoose, prop } from "typegoose";

export default class RutaSchema extends Typegoose {

    @prop({ index: true, unique: true, required: true}) codigo?: string;
    @prop({unique: true, required: true}) ruta: Array<string> = new Array();

    public setCodigo(codigo: string) {
        this.codigo = codigo;
    }
    public addCiudad(ciudad: string) {
        this.ruta.push(ciudad);
    }
 }

 export const Ruta = new RutaSchema().getModelForClass(RutaSchema);