import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';
import { Location } from '@angular/common';
import { UserService } from '../../user/user.service';
import { PorkfeedService } from '../../porkfeed/porkfeed.service';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.scss']
})
export class BookingEditComponent implements OnInit {

  inputForm: FormGroup;
  model: any;
  messageError: boolean;
  messageSuccess: boolean;
  message: string;
  id: any;
  userList: any;
  porkfeedList: any;

  constructor(
    private bookingService: BookingService,
    private userService: UserService,
    private porkfeedService: PorkfeedService,
    private location: Location,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe(result => {
      this.id = result['idOrder'];
    });
  }

  ngOnInit() {
    this.messageError = false;
    this.messageSuccess = false;
    this.buildForm();

    this.getUserList();
    this.getPorkfeedList();
    this.InitialData();
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

  InitialData() {
    this.bookingService.getBookingById(this.id).subscribe(result => {
      if (result) {
        this.inputForm.patchValue(result);
        if(result.odStatus == 'Y'){
          this.inputForm.disable()
        }
      }
    });
  }

  onSubmit() {
    this.model = this.inputForm.value;
    this.bookingService.edit(this.model).subscribe(model => {
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
