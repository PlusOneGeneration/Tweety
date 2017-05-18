import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {NativeScriptFormsModule} from "nativescript-angular/forms";
import {NativeScriptHttpModule} from "nativescript-angular/http";
import {NativeScriptRouterModule} from "nativescript-angular/router";

import {AppComponent} from "./app.component";
import {TwitterService} from "./services/twitter-service";
import {TwitterResource} from "./resources/twitter-resources";
import {TweetsComponent} from "./tweet/tweets.component";

import {routes, navigatableComponents} from "./app.routing";

@NgModule({
    declarations: [
        AppComponent,
        TweetsComponent,
        navigatableComponents],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)],
    providers: [
        TwitterResource,
        TwitterService],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
}
