import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from './modules/shared.module';

import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

const Routes = [
    {
        path: '',
        loadChildren: './modules/login.module#LoginModule',
    },
    {
        path: 'dashboard',
        loadChildren: './modules/member.module#MemberModule'
    }
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        SharedModule,
        RouterModule.forRoot(Routes)
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
