import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PorkfeedService } from './porkfeed.service';

@Component({
  selector: 'app-porkfeed',
  templateUrl: './porkfeed.component.html',
  styleUrls: ['./porkfeed.component.scss']
})
export class PorkfeedComponent implements OnInit {
  userModel: any;
  selected: any[];
  porkfeedList: any[];
  inputForm: FormGroup;

  constructor(
    private porkfeedService: PorkfeedService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.getporkfeedList();
  }

  getporkfeedList() {
    this.porkfeedService.getporkfeedList().subscribe(result => {
      this.porkfeedList = result;
    });
  }

  edit(item?) {
    this.route.navigate([this.route.url + '/edit'], {
      queryParams: {
        idPorkfeed: item.idPorkfeed
      }
    });
  }

  deletedList(item?) {
    if (item !== undefined && item !== null) {
      const items = Array(item);
      this.porkfeedService.deletedPorkfeed(items).subscribe(result => {
        if (result) {
          this.ngOnInit();
        }
      });
    } else {
      if (this.selected !== undefined && this.selected !== null && this.selected.length > 0) {
        this.porkfeedService.deletedPorkfeed(this.selected).subscribe(result => {
          if (result) {
            this.ngOnInit();
            this.selected = [];
          }
        });
      }
    }
  }

}
