import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import {ConfigService} from "../services/config-service";


@Injectable()
export class TwitterResource {
    constructor(private http: Http,
                private configService: ConfigService) {
    }

    auth() {
        let headers = new Headers({
            'Authorization': 'Basic ' + this.configService.getTwitterTokenAuthBase64Encoded(),
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        });
        let options = new RequestOptions({headers: headers});

        return this.http.post(
            'https://api.twitter.com/oauth2/token',
            'grant_type=client_credentials',
            options
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
            'https://api.twitter.com/1.1/search/tweets.json' + query,
            {headers: headers}
        ).map((response) => {
            return response.json();
        });
    };

    // searchMore(query: string) {
    //     let headers = new Headers({
    //         'Authorization': 'Bearer ' + this.configService.getTwitterToken()
    //     });
    //
    //     return this.http.get(
    //         'https://api.twitter.com/1.1/search/tweets.json' + query,
    //         {headers: headers}
    //     ).map((response) => {
    //         return response.json();
    //     });
    // }
}
