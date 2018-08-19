import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedditsService } from '../../services/reddits.service';

@Component({
    selector: 'app-subreddit',
    templateUrl: './subreddit.component.html',
    styles: []
})
export class SubredditComponent implements OnInit {

    loading: boolean;
    reddit: any;

    constructor(private _activatedRoute: ActivatedRoute, private _reddit: RedditsService) {
        this.loading = true;
        this._activatedRoute.params.subscribe(params => {
            this._reddit.searchSubreddit(params['url']).subscribe((data: any) => {
                this.reddit = data[0];
                this.loading = false;
            });
        });
    }

    ngOnInit() {
    }

}
