import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    user;
    password;
    error;

    constructor(private httpService: HttpService) {

    }

    onSubmit() {
        this.httpService.post("login", {user_name: this.user, password: this.password}).subscribe(res => {

        }, err => {
            this.error = err.error;
        })
    }
}
