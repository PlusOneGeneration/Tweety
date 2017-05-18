import * as base64 from "base-64";

export class TwitterConfig {
    private static consumerKey: string = encodeURIComponent('aGtBr1hT7Evva6nkZgGSnMqCZ');
    private static consumerSecret: string = encodeURIComponent('CVecdSeIjO5dLQXl4vPbQ9RyVYdoBKoSavXuqlCSkJ90nglM9S');
    private static tokenCredentials: string = TwitterConfig.consumerKey + ':' + TwitterConfig.consumerSecret;

    public static tokenAuthBase64Encoded = base64.encode(TwitterConfig.tokenCredentials);
}
