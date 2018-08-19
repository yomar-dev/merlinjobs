import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RedditsService {

    constructor(private http: HttpClient) { }

    /**
     * Get the first 100 subreddits.
     * Default: 25 subreddits.
     * Max: 100 subreddits.
     */
    getSubreddits() {
        return this.http.get('https://www.reddit.com/reddits.json?limit=100&raw_json=1').pipe(map ((info: any) => info.data.children ));
    }

    /**
     * Search subreddits by name.
     * @param name: Name subreddit.
     */
    searchSubreddits(name) {
        return this.http.get(`https://www.reddit.com/subreddits/search.json?q=${name}&raw_json=1`)
            .pipe(map ((info: any) => info.data.children ));
    }

    /**
     * Search one subreddit by name.
     * @param name: Name subreddit.
     */
    searchSubreddit(name) {
        return this.http.get(`https://www.reddit.com/subreddits/search.json?q=${name}&limit=1&raw_json=1`)
            .pipe(map ((info: any) => info.data.children ));
    }

    /*
    getComments(name, id) {
        // https://www.reddit.com/r/art/comments/98jwwx.json
        return this.http.get(`https://www.reddit.com/r/${name}/comments/${id}.json`)
            .pipe(map ((info: any) => {
                return info;
            }));
    }
    */
}
