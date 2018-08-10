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
    public total = 1000;
    public pageSize = 10;
    public p = 0;
    public selectedType = 'buy';
    public keywords = '';
    public type = '';

    constructor(private httpService: HttpService) {
    }

    ngOnInit() {
        this.load();
    }

    load() {
        this.httpService.get('v1/orders/history', {keyword: this.keywords, type: this.type}).subscribe(res => {
            this.orders = res;
        }, err => {

        });
    }

    selectType(t) {
        this.selectedType = t;
    }

    onSubmit(e) {
        this.load();
    }

}
