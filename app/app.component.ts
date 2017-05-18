import {Component} from "@angular/core";
import 'rxjs/add/operator/map';

import {TwitterService} from "./services/twitter-service";

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    tweets;
    query: string = '';
    private nextResult: string;
    private isBusy: boolean = false;

    constructor(private twitterService: TwitterService) {
    }

    search(): void {
        this.twitterService.search(this.query)
            .subscribe((result) => {
                if (result && result.statuses) {
                    this.tweets = result.statuses;
                    if (result.search_metadata && result.search_metadata.next_results) {
                        this.nextResult = result.search_metadata.next_results;
                    }
                }
            }, (err) => {
                console.log('err', err);
            });
    };

    listViewLoadMoreItems() {
        if (this.isBusy || !this.nextResult) {
            return;
        }

        this.isBusy = true;

        this.twitterService.searchMore(this.nextResult)
            .subscribe((result) => {
                if (result && result.statuses) {
                    this.tweets = this.tweets.concat(result.statuses);

                    if (result.search_metadata && result.search_metadata.next_results) {
                        this.nextResult = result.search_metadata.next_results;
                    } else {
                        this.nextResult = null;
                    }

                    this.isBusy = false;
                }
            }, (err) => {
                console.log('err', err);
            });
    };
}