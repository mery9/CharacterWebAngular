import { model, Schema } from "mongoose";

export interface User{
    id:string;
    email:string;
    password:string;
    name:string;
    address:string;
    avatarhead:string;
    avatarbody:string;
    avatarleg:string;
    isAdmin:boolean;
    description:string;
}

export const UserSchema = new Schema<User>({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    address: {type: String, required: true},
    avatarhead: {type: String, required: true},
    avatarbody: {type: String, required: true},
    avatarleg: {type: String, required: true},
    isAdmin: {type: Boolean, required: true},
    description: {type: String, required: true},
},  {
    timestamps: true,
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals: true
    }

});

export const UserModel = model<User>('user', UserSchema);
