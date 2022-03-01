import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userModel: any;
  selected: any[];
  userList: any[];
  inputForm: FormGroup;
  constructor(
    private uerService: UserService,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.uerService.getUserList().subscribe(result => {
      this.userList = result;
    });
  }

  edit(item?) {
    this.route.navigate([this.route.url + '/edit'], {
      queryParams: {
        iduser: item.iduser
      }
    });
  }

  deletedList(item?) {
    if (item !== undefined && item !== null) {
      const items = Array(item);
      this.uerService.deletedUser(items).subscribe(result => {
        if (result) {
          this.ngOnInit();
        }
      });
    } else {
      if (this.selected !== undefined && this.selected !== null && this.selected.length > 0) {
        this.uerService.deletedUser(this.selected).subscribe(result => {
          if (result) {
            this.ngOnInit();
            this.selected = [];
          }
        });
      }
    }
  }


  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
