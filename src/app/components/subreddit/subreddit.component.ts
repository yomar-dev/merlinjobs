import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedditsService } from '../../services/reddits.service';

@Component({
    selector: 'app-subreddit',
    templateUrl: './subreddit.component.html',
    styles: []
})
export class SubredditComponent {

    loading: boolean;
    reddit: any;
    comments: any[] = [];

    constructor(private _activatedRoute: ActivatedRoute, private _reddit: RedditsService) {
        this.loading = true;
        this._activatedRoute.params.subscribe(params => {
            const URL = params['url'];
            this._reddit.searchSubreddit(URL).subscribe((data: any) => {
                this.reddit = data[0];
                this._reddit.getComments(URL).subscribe((info: any) => {
                    this.comments = info;
                });
                this.loading = false;
            });
        });
    }
}
