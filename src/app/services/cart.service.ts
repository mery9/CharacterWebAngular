import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AvatarPart } from '../shared/models/AvatarPart';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    private cart:Cart = this.getCartFromLocalStorage();
    private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart)
    constructor() { }

    addToCart(avatarpart:AvatarPart):void {
        let cartItem = this.cart.items.find(item => item.avatarpart.id === avatarpart.id)
        if(cartItem) return;
        this.cart.items.push(new CartItem(avatarpart));
        this.setCartToLocalStorage();
    }

    removeFromCart(avatarpartId: string):void {
        this.cart.items = this.cart.items.filter(item => item.avatarpart.id != avatarpartId)
        this.setCartToLocalStorage();

    }

    changeQuantity(avatarpartId: string, quantity: number) {
        let cartItem = this.cart.items.find(item => item.avatarpart.id === avatarpartId);
        if(!cartItem) return;

        cartItem.quantity = quantity;
        cartItem.price = quantity * cartItem.avatarpart.price;
        this.setCartToLocalStorage();
    }

    clearCart() {
        this.cart = new Cart();
        this.setCartToLocalStorage();
    }

    getCartObservable():Observable<Cart> {
        return this.cartSubject.asObservable();
    }

    private setCartToLocalStorage():void {
        this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
        this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

        const cartJson = JSON.stringify(this.cart);
        localStorage.setItem('Cart', cartJson);
        this.cartSubject.next(this.cart);
    }

    private getCartFromLocalStorage():Cart {
        const cartJson = localStorage.getItem('Cart');
        return cartJson? JSON.parse(cartJson): new Cart();
    }
}
