import { Typegoose, prop, Ref } from "typegoose";
import UserSchema from "./user";

export default class PagoSchema extends Typegoose {
    
    @prop({index: true, required: true, unique: true}) codigo?: string;
    @prop({required: true, ref: UserSchema}) user?: Ref<UserSchema>;
    @prop({required: true}) medio?: string;
}
export const Pago = new PagoSchema().getModelForClass(PagoSchema);