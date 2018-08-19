import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styles: []
})
export class CardComponent {
    @Input() items: any[] = [];

    constructor(private router: Router) { }

    showSubreddit(url) {
        const arrName = url.split('/');
        const name = arrName[2].toLowerCase();
        this.router.navigate(['/subreddit', name]);
    }

}
