import { prop, Typegoose } from "typegoose"

export default class UserSchema extends Typegoose {

    @prop({unique: true, required: true, index: true}) document?: string;
    @prop({required: true}) name?: string;
    @prop({unique: true, required: true}) email?: string;
    @prop({required: true}) password?: string;
}

export const User = new UserSchema().getModelForClass(UserSchema);