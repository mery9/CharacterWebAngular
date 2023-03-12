import { AvatarPart } from "./app/shared/models/AvatarPart";
import { Tag } from "./app/shared/models/Tag";

export const sample_avatarpart: AvatarPart[] = [
    {
        id:'1',
        name: 'Sad Face',
        tags: ['Face'],
        price: 10,
        favorite: true,
        origin: ['Head'],
        imageUrl: 'assets/face/face1.png'
    },
    {
        id:'2',
        name: 'Derp Face',
        tags: ['Face'],
        price: 10,
        favorite: false,
        origin: ['Head'],
        imageUrl: 'assets/face/face2.png'
    },
    {
        id:'3',
        name: 'Happy Face',
        tags: ['Face'],
        price: 10,
        favorite: false,
        origin: ['Head'],
        imageUrl: 'assets/face/face3.png'
    },
    {
        id:'4',
        name: 'Huh face',
        tags: ['Face'],
        price: 10,
        favorite: false,
        origin: ['Head'],
        imageUrl: 'assets/face/face4.png'
    }
]

export const sample_tags:Tag[] = [
    { name: 'All', count: 4},
    { name: 'Face', count: 4},
]