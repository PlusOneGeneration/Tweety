import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import * as base64 from "base-64";

let token = 'AAAAAAAAAAAAAAAAAAAAALeNfwAAAAAAWCKlROUQ88DgCuY%2BXsJwzJzUUxY%3Dl2u09V8YYv3mbX5jaBfKHZlKvUHgD2Z7pIT8fbnlRhheUu0HFq';

@Injectable()
export class TwitterResource {
    token: string;

    consumerKey = encodeURIComponent('aGtBr1hT7Evva6nkZgGSnMqCZ');
    consumerSecret = encodeURIComponent('CVecdSeIjO5dLQXl4vPbQ9RyVYdoBKoSavXuqlCSkJ90nglM9S');
    tokenCredentials = this.consumerKey + ':' + this.consumerSecret;
    tokenAuthBase64Encoded = base64.encode(this.tokenCredentials);

    constructor(private http: Http) {
    }

    auth() {
        let headers = new Headers({
            'Authorization': 'Basic ' + this.tokenAuthBase64Encoded,
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
                this.token = aResponse.access_token;
            }

            return response.json();
        });
    }

    search(query: string) {
        // TODO @@@id: check token

        let headers = new Headers({
            'Authorization': 'Bearer ' + token
        });

        return this.http.get(
            'https://api.twitter.com/1.1/search/tweets.json?q=' + query,
            {headers: headers}
        ).map((response) => {
            return response.json();
        });
    }

    searchMore(query: string) {
        let headers = new Headers({
            'Authorization': 'Bearer ' + token
        });

        return this.http.get(
            'https://api.twitter.com/1.1/search/tweets.json' + query,
            {headers: headers}
        ).map((response) => {
            return response.json();
        });
    }
}
