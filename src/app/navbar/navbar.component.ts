import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    cartQuantity = 0;
    constructor(cartService:CartService) { 
        cartService.getCartObservable().subscribe((newCart) => {
            this.cartQuantity = newCart.totalCount;
        })
    }

}
