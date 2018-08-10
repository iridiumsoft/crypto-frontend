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
