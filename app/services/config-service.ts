import {Injectable} from '@angular/core';
import {TwitterConfig} from '../models/twitter-config';

@Injectable()
export class ConfigService {
    private twitterTokenAuthBase64Encoded = TwitterConfig.tokenAuthBase64Encoded;
    private twitterToken = 'AAAAAAAAAAAAAAAAAAAAALeNfwAAAAAAWCKlROUQ88DgCuY%2BXsJwzJzUUxY%3Dl2u09V8YYv3mbX5jaBfKHZlKvUHgD2Z7pIT8fbnlRhheUu0HFq';

    constructor() {
    }

    getTwitterTokenAuthBase64Encoded() {
        return this.twitterTokenAuthBase64Encoded;
    }

    setTwitterToken(token: string) {
        this.twitterToken = token;
        return this.twitterToken;
    }

    getTwitterToken() {
        return this.twitterToken;
    }
}

