import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {NativeScriptFormsModule} from "nativescript-angular/forms";
import {NativeScriptHttpModule} from "nativescript-angular/http";

import {AppComponent} from "./app.component";
import {TwitterService} from "./services/twitter-service";
import {TwitterResource} from "./resources/twitter-resources";

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule],
    providers: [
        TwitterResource,
        TwitterService],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
}
