import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
    @Input()
    visible = false;
    @Input()
    notFoundMessage = "There is no such part! Sorry!";
    @Input()
    resetLinkText = "Reset";
    @Input()
    resetLinkRoute = "/";
    
    constructor() { }
}
