import { AvatarPart } from "./AvatarPart";

export class CartItem {
    constructor(public avatarpart:AvatarPart) { }
    quantity:number = 1 ;
    price: number = this.avatarpart.price;
}