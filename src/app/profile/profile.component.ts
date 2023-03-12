import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../shared/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
    user!:User;
    constructor(private userService:UserService) { 

        userService.userObservable.subscribe((newUser) => {
            this.user = newUser;
        })
    }
}
