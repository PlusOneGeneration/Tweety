import {Injectable} from '@angular/core';

import {TwitterResource} from "../resources/twitter-resources";

@Injectable()
export class TwitterService {

    constructor(private twitterResource: TwitterResource) {
    }

    auth() {
        return this.twitterResource.auth();
    };

    search(query: string) {
        query = encodeURIComponent(query);
        return this.twitterResource.search(query);
    };

    searchMore(query: string) {
        return this.twitterResource.searchMore(query);
    };

}

