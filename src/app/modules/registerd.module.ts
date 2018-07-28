import {NgModule} from '@angular/core';
import {RegisterdComponent} from '../componenets/registerd/registerd.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from './shared.module';

@NgModule({
  declarations: [
    RegisterdComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: RegisterdComponent,
      }
    ])
  ]
})
class RegisterdModule {
}

