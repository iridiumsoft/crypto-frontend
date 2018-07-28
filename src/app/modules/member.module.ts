import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {MasterMemberComponent} from '../componenets/master.member/master.member.component';
import {SharedModule} from './shared.module';

@NgModule({
  declarations: [
    MasterMemberComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(
      [
        {
          path: '',
          component: MasterMemberComponent,
          children: [
            {
              path: '',
              loadChildren: './dashboard.module#DashboardModule',
            },
            {
              path: 'tradehistory',
              loadChildren: './trade.history.module#TaredHistoryModule',
            },
            {
              path: 'setting',
              loadChildren: './setting.module#SettingModule',
            }
          ]
        }]
    )
  ]
})

export class MemberModule {
}
