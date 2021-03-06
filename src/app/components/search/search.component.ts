import { Component } from '@angular/core';
import { RedditsService } from '../../services/reddits.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styles: []
})
export class SearchComponent {

    loading: boolean;
    subreddits: any[] = [];

    constructor(private _reddits: RedditsService) { }

    search(name) {
        this.loading = true;
        this._reddits.searchSubreddits(name.toLowerCase())
            .subscribe((data: any) => {
                this.subreddits = data;
                this.loading = false;
            });
    }
}
