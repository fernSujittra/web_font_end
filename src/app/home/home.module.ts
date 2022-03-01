import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatRippleModule } from '@angular/material';
import { DataTablesModule } from 'angular-datatables';
import { DataTableModule } from 'primeng/primeng';
import { ProfileComponent } from '../profile/profile.component';
import { FooterComponent } from './../footer/footer.component';
import { NavbarComponent } from './../navbar/navbar.component';
import { SidebarComponent } from './../sidebar/sidebar.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UserAddComponent } from './admin/user/user-add/user-add.component';
import { UserEditComponent } from './admin/user/user-edit/user-edit.component';
import { UserComponent } from './admin/user/user.component';
import { PorkfeedAddComponent } from './admin/porkfeed/porkfeed-add/porkfeed-add.component';
import { PorkfeedEditComponent } from './admin/porkfeed/porkfeed-edit/porkfeed-edit.component';
import { PorkfeedComponent } from './admin/porkfeed/porkfeed.component';
import { BookingComponent } from './admin/booking/booking.component';
import { BookingAddComponent } from './admin/booking/booking-add/booking-add.component';
import { BookingEditComponent } from './admin/booking/booking-edit/booking-edit.component';
import { ShareComponent } from './admin/share/share.component';
import { ShareAddComponent } from './admin/share/share-add/share-add.component';
import { ShareEditComponent } from './admin/share/share-edit/share-edit.component';
import { DividedComponent } from './admin/divided/divided.component';


@NgModule({
  declarations: [
    ProfileComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    UserAddComponent,
    UserEditComponent,
    UserComponent,
    PorkfeedComponent,
    PorkfeedAddComponent,
    PorkfeedEditComponent,
    BookingComponent,
    BookingAddComponent,
    BookingEditComponent,
    ShareComponent,
    ShareAddComponent,
    ShareEditComponent,
    DividedComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DataTablesModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,

    MatNativeDateModule,
    MatDatepickerModule,MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule
  ],providers: [
    MatDatepickerModule,MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule
  ],
})
export class HomeModule { }
