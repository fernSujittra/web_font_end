import { BookingAddComponent } from './admin/booking/booking-add/booking-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { BookingComponent } from './admin/booking/booking.component';
import { PorkfeedAddComponent } from './admin/porkfeed/porkfeed-add/porkfeed-add.component';
import { PorkfeedEditComponent } from './admin/porkfeed/porkfeed-edit/porkfeed-edit.component';
import { PorkfeedComponent } from './admin/porkfeed/porkfeed.component';
import { UserAddComponent } from './admin/user/user-add/user-add.component';
import { UserEditComponent } from './admin/user/user-edit/user-edit.component';
import { UserComponent } from './admin/user/user.component';
import { HomeComponent } from './home.component';
import { BookingEditComponent } from './admin/booking/booking-edit/booking-edit.component';
import { ShareEditComponent } from './admin/share/share-edit/share-edit.component';
import { ShareAddComponent } from './admin/share/share-add/share-add.component';
import { ShareComponent } from './admin/share/share.component';
import { DividedComponent } from './admin/divided/divided.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', redirectTo: '/home/profile', pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent },
      {
        path: 'user' ,
        children: [
          { path: '', component: UserComponent },
          { path: 'add', component: UserAddComponent },
          { path: 'edit', component: UserEditComponent }
        ]
      },
      {
        path: 'porkfeed' ,
        children: [
          { path: '', component: PorkfeedComponent },
          { path: 'add', component: PorkfeedAddComponent },
          { path: 'edit', component: PorkfeedEditComponent }
        ]
      },
      {
        path: 'booking' ,
        children: [
          { path: '', component: BookingComponent },
          { path: 'add', component: BookingAddComponent },
          { path: 'edit', component: BookingEditComponent }
        ]
      },
      {
        path: 'share' ,
        children: [
          { path: '', component: ShareComponent },
          { path: 'add', component: ShareAddComponent },
          { path: 'edit', component: ShareEditComponent }
        ]
      },
      {
        path: 'divided' ,
        children: [
          { path: '', component: DividedComponent },
          // { path: 'add', component: ShareAddComponent },
          // { path: 'edit', component: ShareEditComponent }
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
