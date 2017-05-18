import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {ConfigService} from "../services/config-service";


@Injectable()
export class TwitterResource {
    private searchUrl: string = 'https://api.twitter.com/1.1/search/tweets.json';
    private authUrl: string = 'https://api.twitter.com/1.1/search/tweets.json';

    constructor(private http: Http,
                private configService: ConfigService) {
    }

    auth() {
        let headers = new Headers({
            'Authorization': 'Basic ' + this.configService.getTwitterTokenAuthBase64Encoded(),
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        });

        return this.http.post(
            this.authUrl, 'grant_type=client_credentials', {headers: headers}
        ).map((response) => {
            let aResponse = response.json() || {};
            if (aResponse && aResponse.access_token) {
                this.configService.setTwitterToken(aResponse.access_token);
            }

            return response.json();
        });
    }

    search(query: string) {
        let headers = new Headers({
            'Authorization': 'Bearer ' + this.configService.getTwitterToken()
        });

        return this.http.get(
            this.searchUrl + query, {headers: headers}
        ).map((response) => {
            return response.json();
        });
    };
}
