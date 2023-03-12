import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
        let avatarpartsObservable:Observable<AvatarPart[]>
        activatedRoute.params.subscribe((params) => {
            if(params.searchTerm)
            avatarpartsObservable = this.avatarPartService.getAllAvatarPartsBySearchTerm(params.searchTerm);
            else if(params.tag)
            avatarpartsObservable = this.avatarPartService.getAllAvatarPartsByTag(params.tag);
            else
            avatarpartsObservable = avatarPartService.getAll();

            avatarpartsObservable.subscribe((serverAvatarparts) => {
                this.avatarparts = serverAvatarparts;
            })
        })
    }

}
