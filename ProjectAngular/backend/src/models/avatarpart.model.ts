import { model, Schema } from "mongoose";

export interface Avatarpart {
    id:string;
    name:string;
    price:number;
    tags: string[];
    favorite:boolean;
    imageUrl: string;
    origin: string[];

}

export const AvatarPartSchema = new Schema<Avatarpart>(
    {
        name: {type: String, required:true},
        price: {type: Number, required:true},
        tags: {type: [String]},
        favorite: {type: Boolean, required:false},
        imageUrl: {type: String, required:true},
        origin: {type: [String], required:true},
    },{
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps: true
    }
);

export const AvatarPartModel = model<Avatarpart>('avatarpart', AvatarPartSchema);