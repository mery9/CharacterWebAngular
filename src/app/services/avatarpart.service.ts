import { Injectable } from '@angular/core';
import { sample_avatarpart, sample_tags } from 'src/data';
import { AvatarPart } from '../shared/models/AvatarPart';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class AvatarpartService {

  constructor() { }

  getAll():AvatarPart[]{
    return sample_avatarpart;
  }

  getAllAvatarPartsBySearchTerm(searchTerm:string) {
    return this.getAll().filter(AvatarPart => AvatarPart.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags():Tag[] {
    return sample_tags;
  }

  getAllAvatarPartsByTag(tag:string):AvatarPart[] {
    return tag === "All"?
    this.getAll():
    this.getAll().filter(AvatarPart => AvatarPart.tags?.includes(tag));
  }

  getAvatarPartById(avatarpartId:string):AvatarPart{
    return this.getAll().find(avatarpart => avatarpart.id == avatarpartId) ?? new AvatarPart();
  }
}
