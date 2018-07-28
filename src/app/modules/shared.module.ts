import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {UserService} from "../services/user.service";
import {HttpService} from "../services/http.service";

const imported = [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
];

@NgModule({
    providers: [UserService, HttpService],
    imports: imported,
    exports: imported,
})

export class SharedModule {

}
