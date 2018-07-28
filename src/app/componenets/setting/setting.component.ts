import {Component, OnInit} from '@angular/core';
import {Http2Server} from 'http2';

@Component({
    selector: 'app-setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.css'],
    providers: [HttpServer]
})
export class SettingComponent implements OnInit {

    constructor(private http: Http) {
    }

    ngOnInit() {
    }

}
