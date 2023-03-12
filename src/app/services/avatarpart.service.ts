import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_avatarpart, sample_tags } from 'src/data';
import { AVATARPARTS_BY_ID_URL, AVATARPARTS_BY_SEARCH_URL, AVATARPARTS_BY_TAG_URL, AVATARPARTS_TAGS_URL, AVATARPARTS_URL } from '../shared/constants/urls';
import { AvatarPart } from '../shared/models/AvatarPart';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class AvatarpartService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<AvatarPart[]> {
    return this.http.get<AvatarPart[]>(AVATARPARTS_URL);
  }

  getAllAvatarPartsBySearchTerm(searchTerm:string) {
    return this.http.get<AvatarPart[]>(AVATARPARTS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(AVATARPARTS_TAGS_URL);
  }

  getAllAvatarPartsByTag(tag:string): Observable<AvatarPart[]> {
    return tag === "All"?
    this.getAll():
    this.http.get<AvatarPart[]>(AVATARPARTS_BY_TAG_URL + tag);
  }

  getAvatarPartById(avatarpartId:string): Observable<AvatarPart>{
    return this.http.get<AvatarPart>(AVATARPARTS_BY_ID_URL + avatarpartId);
  }
}
