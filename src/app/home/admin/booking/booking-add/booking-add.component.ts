import { PorkfeedService } from './../../porkfeed/porkfeed.service';
import { UserService } from './../../user/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BookingService } from '../booking.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-booking-add',
  templateUrl: './booking-add.component.html',
  styleUrls: ['./booking-add.component.scss']
})
export class BookingAddComponent implements OnInit {

  inputForm: FormGroup;
  model: any;
  userList: any;
  porkfeedList: any;
  messageError: boolean;
  messageSuccess: boolean;
  message: string;

  constructor(
    private bookingService: BookingService,
    private userService: UserService,
    private porkfeedService: PorkfeedService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.messageError = false;
    this.messageSuccess = false
    this.getUserList();
    this.getPorkfeedList();
    this.buildForm();
  }

  getUserList() {
    this.userService.getUserList().subscribe(result => {
      this.userList = result;
    });
  }

  getPorkfeedList() {
    this.porkfeedService.getporkfeedList().subscribe(result => {
      this.porkfeedList = result;
    });
  }

  onSubmit() {
    this.model = this.inputForm.value;
    this.bookingService.addBooking(this.model).subscribe(model => {
      if (model.result) {
        this.messageSuccess = true;
        this.messageError = false;
        this.onBackLocation();
      } else {
        this.messageSuccess = false;
        this.messageError = true;
      }
      this.message = model.message;
    });
  }

  buildForm() {
    this.inputForm = this.bookingService.buildForm();

    this.inputForm.controls['idPorkfeed'].valueChanges.subscribe(item =>{
      this.porkfeedService.getPorkfeedById(item).subscribe(result => {
        if(result){
          const sumValue = result.porkfeedPrice*this.inputForm.controls['oderquantity'].value;
          this.inputForm.controls['totalprice'].setValue(sumValue);
        }
      });
    })

    this.inputForm.controls['oderquantity'].valueChanges.subscribe(item =>{
      this.porkfeedService.getPorkfeedById(this.inputForm.controls['idPorkfeed'].value).subscribe(result => {
        if(result){
          const sumValue = result.porkfeedPrice*item;
          this.inputForm.controls['totalprice'].setValue(sumValue);
        }
      });
    })
  }

  onBackLocation() {
    this.location.back();
  }

}
