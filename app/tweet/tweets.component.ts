import {Component} from "@angular/core";
import 'rxjs/add/operator/map';

import {TwitterService} from "../services/twitter-service";

@Component({
    selector: 'tweets',
    moduleId: module.id,
    templateUrl: 'tweets.component.html'
})
export class TweetsComponent {
    tweets;
    query: string = '';
    isBusy: boolean = false;
    private nextResult: string;

    constructor(private twitterService: TwitterService) {
    }

    search(): void {
        this.twitterService.search(this.query)
            .subscribe((result) => {
                if (result && result.statuses) {
                    this.tweets = result.statuses;
                    this.prepareNextQuery(result);
                }
            }, (err) => {
                console.log('err', err);
            });
    };

    searchMoreItems() {
        if (this.isBusy || !this.nextResult || !this.query) {
            return;
        }

        this.isBusy = true;

        this.twitterService.searchMore(this.nextResult)
            .subscribe((result) => {
                if (result && result.statuses) {
                    this.tweets = this.tweets.concat(result.statuses);

                    this.prepareNextQuery(result);

                    this.isBusy = false;
                }
            }, (err) => {
                console.log('err', err);
            });
    };

    searchCleanUp() {
        delete this.query;
        delete this.nextResult;
    };

    private prepareNextQuery(result) {
        if (result.search_metadata && result.search_metadata.next_results) {
            this.nextResult = result.search_metadata.next_results;
        } else {
            this.nextResult = null;
        }
    };
}