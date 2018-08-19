import { Component, OnInit } from '@angular/core';
import { RedditsService } from '../../services/reddits.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styles: []
})
export class SearchComponent implements OnInit {

    loading: boolean;
    subreddits: any[] = [];

    constructor(private _reddits: RedditsService, private router: Router) { }

    ngOnInit() {
    }

    search(name) {
        this.loading = true;
        this._reddits.searchSubreddits(name.toLowerCase())
            .subscribe((data: any) => {
                this.subreddits = data;
                this.loading = false;
            });
    }

    showSubreddit(url) {
        const arrName = url.split('/');
        const name = arrName[2].toLowerCase();
        this.router.navigate(['/subreddit', name]);
    }

}
