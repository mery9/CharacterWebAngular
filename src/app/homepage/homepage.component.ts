import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvatarpartService } from '../services/avatarpart.service';
import { AvatarPart } from '../shared/models/AvatarPart';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

    avatarparts:AvatarPart[] = [];
    constructor(private avatarPartService:AvatarpartService, activatedRoute:ActivatedRoute) {
        activatedRoute.params.subscribe((params) => {
            if(params.searchTerm)
            this.avatarparts = this.avatarPartService.getAllAvatarPartsBySearchTerm(params.searchTerm);
            else if(params.tag)
            this.avatarparts = this.avatarPartService.getAllAvatarPartsByTag(params.tag);
            else
            this.avatarparts = avatarPartService.getAll();
        })
    }

}
