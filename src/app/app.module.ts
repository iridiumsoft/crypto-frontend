import {APP_ID, Inject, NgModule, PLATFORM_ID} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from '@angular/platform-browser';

import {SharedModule} from './modules/shared.module';

import {AppComponent} from './app.component';

import {LoggedInOnly, NoneMembersOnly} from "./services/guard.service";
import {HttpService} from "./services/http.service";
import {isPlatformBrowser} from "@angular/common";

const Routes = [
    {
        path: '',
        canActivate: [NoneMembersOnly],
        loadChildren: './modules/login.module#LoginModule',
    },
    {
        path: 'dashboard',
        canActivate: [LoggedInOnly],
        loadChildren: './modules/member.module#MemberModule'
    }
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [NoneMembersOnly, LoggedInOnly, HttpService],
    imports: [
        BrowserModule.withServerTransition({appId: 'crypto-bot'}),
        HttpClientModule,
        SharedModule,
        RouterModule.forRoot(Routes)
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
    constructor(@Inject(PLATFORM_ID) private platformId: Object,
                @Inject(APP_ID) private appId: string) {
        const platform = isPlatformBrowser(platformId) ?
            'in the browser' : 'on the server';
        console.log(`Running ${platform} with appId=${appId}`);
    }
}
