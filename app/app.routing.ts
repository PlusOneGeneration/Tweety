import {TweetsComponent} from './tweet/tweets.component';

export const routes = [
    {path: '', redirectTo: '/tweets', pathMatch: 'full'},
    {path: 'tweets', component: TweetsComponent}
];

export const navigatableComponents = [
    TweetsComponent
];