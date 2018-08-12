import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {DashboardComponent} from '../componenets/dashboard/dashboard.component';
import {SharedModule} from './shared.module';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
    declarations: [
        DashboardComponent,
    ],
    imports: [
        SharedModule,
        NgxPaginationModule,
        RouterModule.forChild([
            {
                path: '',
                component: DashboardComponent,
            }
        ])
    ]
})

export class DashboardModule {

}
