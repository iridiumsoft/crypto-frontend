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
                            path: 'home',
                            loadChildren: './dashboard.module#DashboardModule',
                        },
                        {
                            path: 'trade-history',
                            loadChildren: './trade.history.module#TaredHistoryModule',
                        },
                        {
                            path: 'setting',
                            loadChildren: './setting.module#SettingModule',
                        }, {
                            path: 'account',
                            loadChildren: './account.module#AccountModule',
                        }
                    ]
                }]
        )
    ]
})

export class MemberModule {
}
