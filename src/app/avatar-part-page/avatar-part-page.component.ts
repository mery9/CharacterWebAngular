import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AvatarpartService } from '../services/avatarpart.service';
import { CartService } from '../services/cart.service';
import { AvatarPart } from '../shared/models/AvatarPart';

@Component({
  selector: 'app-avatar-part-page',
  templateUrl: './avatar-part-page.component.html',
  styleUrls: ['./avatar-part-page.component.css']
})
export class AvatarPartPageComponent {
    avatarpart!: AvatarPart;
    constructor(activatedRoute:ActivatedRoute, avatarpartService:AvatarpartService, private cartService:CartService, private router: Router) {
        activatedRoute.params.subscribe((params) => {
            if(params.id)
            avatarpartService.getAvatarPartById(params.id).subscribe(serverAvatarpart => {
                this.avatarpart = serverAvatarpart;
            });
        })
    }

    addToCart() {
        this.cartService.addToCart(this.avatarpart);
        this.router.navigateByUrl('/cart-page');
    }
}
