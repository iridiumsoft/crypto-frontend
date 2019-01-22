import {Component, OnInit} from "@angular/core";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-trade.history',
  templateUrl: './trade.history.component.html',
  styleUrls: ['./trade.history.component.css'],
})

export class TradeHistoryComponent implements OnInit {

  public orders: any = [];
  public ordersBitfinex: any = [];
  public total = 0;
  public pageSize = 10;
  public p = 0;
  public selectedType = 'all';
  public keywords = '';
  public order_by = 'id';
  public ordersBy = ['id', 'pare'];

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    // this.load();
    this.bitfinexHistory();
  }

  // load() {
  //   this.httpService.get('v1/orders/history', {
  //     order_by: this.order_by,
  //     keyword: this.keywords,
  //     page: this.p,
  //     type: this.selectedType
  //   }).subscribe(res => {
  //     this.orders = res['orders'];
  //     this.total = res['total'];
  //   });
  // }

  bitfinexHistory() {
    this.httpService.get('v1/orders/bitfinex-history', {
      order_by: this.order_by,
      keyword: this.keywords,
      page: this.p,
      trading_type: this.selectedType
    }).subscribe(res => {
      this.ordersBitfinex = res['orders_bitfinex'];
      this.total = res['total'];
    });
  }

  selectType(t) {
    this.selectedType = t;
    this.bitfinexHistory();
  }

  onSubmit(e) {
    this.bitfinexHistory();
  }

  onPageChange(p) {
    this.p = p;
    this.bitfinexHistory();
  }

}
