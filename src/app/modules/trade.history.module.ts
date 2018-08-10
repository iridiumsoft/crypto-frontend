import {NgModule} from '@angular/core';
import {SharedModule} from './shared.module';
import {TradeHistoryComponent} from '../componenets/trade.history/trade.history.component';
import {RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@NgModule({
    declarations: [
        TradeHistoryComponent,
    ],
    imports: [
        SharedModule,
        NgxPaginationModule,
        RouterModule.forChild([
            {
                path: '',
                component: TradeHistoryComponent,
            }
        ])
    ],
})

export class TaredHistoryModule {
}
