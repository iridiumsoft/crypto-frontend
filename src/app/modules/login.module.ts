import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ForgotComponent} from '../componenets/forgot/forgot.component';
import {LoginComponent} from '../componenets/login/login.component';
import {RegisterdComponent} from '../componenets/registerd/registerd.component';
import {ResetPasswordComponent} from '../componenets/reset.password/reset.password.component';
import {NonMemberComponent} from '../componenets/non-member/non-member.component';
import {SharedModule} from './shared.module';

@NgModule({
    declarations: [
        NonMemberComponent,
        // Components to be used
        LoginComponent,
        ForgotComponent,
        RegisterdComponent,
        ResetPasswordComponent,
    ],
    imports: [
        SharedModule,
        // Modules to be should
        RouterModule.forChild([
            {
                path: '',
                component: NonMemberComponent,
                children: [
                    {
                        path: '',
                        component: LoginComponent,
                    },
                    {
                        path: 'login',
                        component: LoginComponent,
                    }, {
                        path: 'forgot',
                        component: ForgotComponent,
                    },
                    {
                        path: 'reset-password',
                        component: ResetPasswordComponent,
                    }
                ]
            },
        ])
    ]
})

export class LoginModule {
}
