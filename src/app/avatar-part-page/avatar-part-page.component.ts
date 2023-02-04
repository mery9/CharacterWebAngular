import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvatarpartService } from '../services/avatarpart.service';
import { AvatarPart } from '../shared/models/AvatarPart';

@Component({
  selector: 'app-avatar-part-page',
  templateUrl: './avatar-part-page.component.html',
  styleUrls: ['./avatar-part-page.component.css']
})
export class AvatarPartPageComponent {
    avatarpart!: AvatarPart;
    constructor(activatedRoute:ActivatedRoute, avatarpartService:AvatarpartService) {
        activatedRoute.params.subscribe((params) => {
            if(params.id)
            this.avatarpart = avatarpartService.getAvatarPartById(params.id);
        })
    }

}
