import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-description-page',
  templateUrl: './edit-description-page.component.html',
  styleUrls: ['./edit-description-page.component.css']
})
export class EditDescriptionPageComponent {
    user = this.userService.getUserFromLocalStorage();
    description = this.user.description;

    constructor(private userService: UserService) {}
    

    updateDescription() {
    this.userService.updateDescription(this.description).subscribe();
  }
}



