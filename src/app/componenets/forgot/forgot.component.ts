import {Component} from '@angular/core';
import {HttpService} from "../../services/http.service";

@Component({
    selector: 'app-forgot',
    templateUrl: './forgot.component.html',
    styleUrls: ['./forgot.component.css']
})

export class ForgotComponent {
    email: string;
    errorMessage: string;
    loading: boolean;

    constructor(private httpService: HttpService) {
    }

    onSubmit() {
        this.loading = true;
        this.httpService.post("forgot-password", {email: this.email}).subscribe(res => {
            this.loading = false;

        }, err => {
            this.errorMessage = err.error;
            this.loading = false;
        })
    }
}
