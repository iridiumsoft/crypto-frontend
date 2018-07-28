import {NgModule} from '@angular/core';
import {SettingComponent} from '../componenets/setting/setting.component';
import {SharedModule} from './shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    SettingComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: SettingComponent,
      }
    ])
  ]
})

export class SettingModule {
}
