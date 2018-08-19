import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RedditsService {

    constructor(private http: HttpClient) { }

    getSubreddits() {
        return this.http.get('https://www.reddit.com/reddits.json?limit=100&raw_json=1').pipe(map ((info: any) => info.data.children ));
    }

    searchSubreddits(name) {
        return this.http.get(`https://www.reddit.com/subreddits/search.json?q=${name}&raw_json=1`)
            .pipe(map ((info: any) => info.data.children ));
    }

    searchSubreddit(name) {
        return this.http.get(`https://www.reddit.com/subreddits/search.json?q=${name}&limit=1&raw_json=1`)
            .pipe(map ((info: any) => info.data.children ));
    }
}
