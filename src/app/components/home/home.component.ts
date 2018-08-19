import { Component } from '@angular/core';
import { RedditsService } from '../../services/reddits.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent {

    loading: boolean;
    subreddits: any[] = [];

    constructor(private _reddits: RedditsService) {
        this.loading = true;
        this._reddits.getSubreddits()
            .subscribe((data: any) => {
                this.subreddits = data;
                this.loading = false;
            });
    }
}
