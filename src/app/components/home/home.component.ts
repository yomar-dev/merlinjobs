import { Component, OnInit } from '@angular/core';
import { RedditsService } from '../../services/reddits.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent implements OnInit {

    loading: boolean;
    subreddits: any[] = [];
    test = '';

    constructor(private _reddits: RedditsService) {
        this.loading = true;
        this.test = '<h5>Hello World!!</h5>';
        this._reddits.getSubreddits()
            .subscribe((data: any) => {
                this.subreddits = data;
                console.log('Subreddits >>> ', data);
                this.loading = false;
            });
    }

    ngOnInit() {
    }

}
