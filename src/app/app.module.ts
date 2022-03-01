import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';
import { AccordionModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { PaginatorModule } from 'primeng/primeng';
import { FormLoginComponent } from './form-login/form-login.component';
@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DataTablesModule,
    AccordionModule,
    DataTableModule,
    PaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
