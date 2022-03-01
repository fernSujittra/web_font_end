import { ShareService } from './../share.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Location } from '@angular/common';
import { UserService } from '../../user/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-share-edit',
  templateUrl: './share-edit.component.html',
  styleUrls: ['./share-edit.component.scss']
})
export class ShareEditComponent implements OnInit {

  inputForm: FormGroup;
  model: any;
  messageError: boolean;
  messageSuccess: boolean;
  message: string;
  id: any;
  userList: any;

  constructor(
    private shareService: ShareService,
    private userService: UserService,
    private location: Location,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe(result => {
      this.id = result['idShare'];
    });
   }

  ngOnInit() {
    this.messageError = false;
    this.messageSuccess = false;
    this.buildForm();

    this.getUserList();
    this.InitialData();
  }

  onSubmit() {
    this.model = this.inputForm.value;
    this.shareService.edit(this.model).subscribe(model => {
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

  getUserList() {
    this.userService.getUserList().subscribe(result => {
      this.userList = result;
    });
  }

  InitialData() {
    this.shareService.getShareById(this.id).subscribe(result => {
      if (result) {
        this.inputForm.patchValue(result);
      }
    });
  }

  buildForm() {
    this.inputForm = this.shareService.buildForm();
    this.inputForm.controls['numberShares'].valueChanges.subscribe(item => {
      const value = 100*item;
      this.inputForm.controls['priceShares'].setValue(value);
    })
  }

  onBackLocation() {
    this.location.back();
  }

}
