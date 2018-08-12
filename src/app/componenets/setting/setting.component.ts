import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {CommonService} from '../../services/common.service';

declare const swal: any;

@Component({
    selector: 'app-setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.css'],
})

export class SettingComponent implements OnInit {

    trade_limit: any = {};
    profit_target: any = {};

    constructor(private httpService: HttpService) {

    }

    ngOnInit() {
        // load Sweet Alert
        CommonService.loadFile('https://unpkg.com/sweetalert/dist/sweetalert.min.js');

        this.httpService.get('v1/settings').subscribe(res => {
            this.trade_limit = res['trade_limit'] || {};
            this.profit_target = res['profit_target'] || {};
        }, err => {

        })
    }

    onSubmit(e) {
        this.httpService.post('v1/settings', {
            trade_limit: this.trade_limit,
            profit_target: this.profit_target
        }).subscribe(res => {
            swal('Updates', 'setting updated successfully', 'success')
        }, err => {

        })
    }

}
