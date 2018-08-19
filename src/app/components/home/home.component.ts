import { Component, OnInit } from '@angular/core';
import { RedditsService } from '../../services/reddits.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent implements OnInit {

    loading: boolean;
    subreddits: any[] = [];

    constructor(private _reddits: RedditsService, private router: Router) {
        this.loading = true;
        this._reddits.getSubreddits()
            .subscribe((data: any) => {
                this.subreddits = data;
                this.loading = false;
            });
    }

    ngOnInit() {
    }

    showSubreddit(url) {
        const arrName = url.split('/');
        const name = arrName[2].toLowerCase();
        this.router.navigate(['/subreddit', name]);
    }

}
