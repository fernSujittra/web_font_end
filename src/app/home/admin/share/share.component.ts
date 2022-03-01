import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareService } from './share.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  shareModel: any;
  selected: any[];
  shareList: any[];
  inputForm: FormGroup;

  constructor(
    private shareService: ShareService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.getshareList();
  }

  getshareList() {
    this.shareService.getShareList().subscribe(result => {
      this.shareList = result;
    });
  }

  edit(item?) {
    this.route.navigate([this.route.url + '/edit'], {
      queryParams: {
        idShare: item.idShare
      }
    });
  }

  deletedList(item?) {
    if (item !== undefined && item !== null) {
      const items = Array(item);
      this.shareService.deletedShare(items).subscribe(result => {
        if (result) {
          this.ngOnInit();
        }
      });
    } else {
      if (this.selected !== undefined && this.selected !== null && this.selected.length > 0) {
        this.shareService.deletedShare(this.selected).subscribe(result => {
          if (result) {
            this.ngOnInit();
            this.selected = [];
          }
        });
      }
    }
  }

}
