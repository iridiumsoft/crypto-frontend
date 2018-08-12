import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {CommonService} from "../../services/common.service";

declare const swal: any;

@Component({
    selector: 'app-dashboard',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit, OnDestroy {
    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }


}
