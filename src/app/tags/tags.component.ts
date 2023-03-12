import { Component } from '@angular/core';
import { AvatarpartService } from '../services/avatarpart.service';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
    tags?:Tag[];
    constructor(avatarpartService:AvatarpartService) {
        avatarpartService.getAllTags().subscribe(serverTags => {
            this.tags = serverTags;
        });
    }


}
