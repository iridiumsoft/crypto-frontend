import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

const imported = [
  CommonModule,
  FormsModule,
  HttpClientModule,
  RouterModule
];

@NgModule({
  imports: imported,
  exports: imported,
})

export class SharedModule {

}
