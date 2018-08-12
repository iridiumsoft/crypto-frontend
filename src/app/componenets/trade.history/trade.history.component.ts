import {Component, OnInit} from '@angular/core';
import {Order} from "../../interfaces/order.interface";
import {HttpService} from "../../services/http.service";

@Component({
    selector: 'app-trade.history',
    templateUrl: './trade.history.component.html',
    styleUrls: ['./trade.history.component.css'],
})

export class TradeHistoryComponent implements OnInit {

    public orders: any = [];
    public total = 0;
    public pageSize = 10;
    public p = 0;
    public selectedType = 'all';
    public keywords = '';
    public order_by = 'id';
    public ordersBy = ['id', 'date', 'coin', 'exchange', 'order_status'];

    constructor(private httpService: HttpService) {
    }

    ngOnInit() {
        this.load();
    }

    load() {

        this.httpService.get('v1/orders/history', {
            order_by: this.order_by,
            keyword: this.keywords,
            page: this.p,
            type: this.selectedType
        }).subscribe(res => {
            this.orders = res['orders'];
            this.total = res['total'];
        });

    }

    selectType(t) {
        this.selectedType = t;
        this.load();
    }

    onSubmit(e) {
        this.load();
    }

    onPageChange(p) {
        this.p = p;
        this.load();
    }

}
