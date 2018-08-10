import {Component} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    user;
    password;
    errorMessage;
    loading: boolean;

    constructor(private httpService: HttpService, private route: Router) {
    }

    onSubmit() {
        this.loading = true;
        this.errorMessage = null;
        this.httpService.post("login", {user_name: this.user, password: this.password}).subscribe(res => {
            UserService.setUser(res['user'], res['token']);
            this.route.navigate(['dashboard/home']);
            this.loading = false;
        }, err => {
            this.errorMessage = err.error;
            this.loading = false;
        })
    }
}
