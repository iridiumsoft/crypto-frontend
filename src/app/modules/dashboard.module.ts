import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {DashboardComponent} from '../componenets/dashboard/dashboard.component';
import {SharedModule} from './shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    SharedModule,
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
