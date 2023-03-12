import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

    cart!: Cart;
    constructor(private cartService: CartService) {
        this.cartService.getCartObservable().subscribe((cart) => {
            this.cart = cart;
        })
    }

    removeFromCart(cartItem:CartItem) {
        this.cartService.removeFromCart(cartItem.avatarpart.id);
    }

    changeQuantity(cartItem:CartItem,quantityInString:string) {
        const quantity = parseInt(quantityInString);
        this.cartService.changeQuantity(cartItem.avatarpart.id, quantity);
    }

}
