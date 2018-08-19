import { Component, OnInit } from '@angular/core';
import { RedditsService } from '../../services/reddits.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styles: []
})
export class SearchComponent implements OnInit {

    loading: boolean;
    subreddits: any[] = [];

    constructor(private _reddits: RedditsService) { }

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

}
