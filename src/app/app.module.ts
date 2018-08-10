import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from '@angular/platform-browser';

import {SharedModule} from './modules/shared.module';

import {AppComponent} from './app.component';

import {LoggedInOnly, NoneMembersOnly} from "./services/guard.service";
import {HttpService} from "./services/http.service";

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
        BrowserModule,
        HttpClientModule,
        SharedModule,
        RouterModule.forRoot(Routes)
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
