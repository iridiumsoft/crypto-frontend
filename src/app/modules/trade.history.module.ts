import {NgModule} from '@angular/core';
import {SharedModule} from './shared.module';
import {TradeHistoryComponent} from '../componenets/trade.history/trade.history.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    TradeHistoryComponent,
  ],
  imports: [
    SharedModule,
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
