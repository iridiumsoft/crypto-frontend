import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-master.member',
    templateUrl: './master.member.component.html',
    styleUrls: ['./master.member.component.css']
})
export class MasterMemberComponent implements OnInit {
    user = {
        first_name: '',
        last_name: ''
    };
    collapsed = false;
    nav = [{
        title: 'Dashboard',
        route: 'home',
        icon: 'pie-chart'
    }, {
        title: 'Trade History',
        route: 'trade-history',
        icon: 'table'
    }, {
        title: 'Setting',
        route: 'setting',
        icon: 'gear'
    }, {
        title: 'Account',
        route: 'account',
        icon: 'user'
    }];

    constructor(private router: Router) {

    }

    ngOnInit() {
        this.user = UserService.getUser();
    }

    logout() {
        localStorage.clear();
        this.router.navigate(['/'])
    }
}
