import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';
import { User } from '../shared/models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    cartQuantity = 0;

    user!:User;
    constructor(cartService:CartService, private userService:UserService) { 
        cartService.getCartObservable().subscribe((newCart) => {
            this.cartQuantity = newCart.totalCount;
        })

        userService.userObservable.subscribe((newUser) => {
            this.user = newUser;
        })
    }
    logout(){
        this.userService.logout();
    }

    get isAuth(){
        return this.user.token;
    }

}
