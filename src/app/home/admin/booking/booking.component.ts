import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  userModel: any;
  selected: any[];
  bookingList: any[];
  inputForm: FormGroup;
  constructor(
    private bookingService: BookingService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.getBookingList();
  }

  getBookingList() {
    this.bookingService.getBookingList().subscribe(result => {
      this.bookingList = result;
    });
  }

  edit(item?) {
    this.route.navigate([this.route.url + '/edit'], {
      queryParams: {
        idOrder: item.idOrder
      }
    });
  }

  deletedList(item?) {
    if (item !== undefined && item !== null) {
      const items = Array(item);
      this.bookingService.deletedBooking(items).subscribe(result => {
        if (result) {
          this.ngOnInit();
        }
      });
    } else {
      if (this.selected !== undefined && this.selected !== null && this.selected.length > 0) {
        this.bookingService.deletedBooking(this.selected).subscribe(result => {
          if (result) {
            this.ngOnInit();
            this.selected = [];
          }
        });
      }
    }
  }

}
