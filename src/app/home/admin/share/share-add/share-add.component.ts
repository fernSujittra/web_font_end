import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from '../../user/user.service';
import { ShareService } from '../share.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-share-add',
  templateUrl: './share-add.component.html',
  styleUrls: ['./share-add.component.scss']
})
export class ShareAddComponent implements OnInit {

  inputForm: FormGroup;
  model: any;
  userList: any;
  messageError: boolean;
  messageSuccess: boolean;
  message: string;

  constructor(
    private userService: UserService,
    private shareService: ShareService,
    private location: Location,

  ) { }

  ngOnInit() {
    this.messageError = false;
    this.messageSuccess = false
    this.getUserList();
    this.buildForm();
  }

  getUserList() {
    this.userService.getUserList().subscribe(result => {
      this.userList = result;
    });
  }

  onSubmit() {
    this.model = this.inputForm.value;
    this.shareService.addShare(this.model).subscribe(model => {
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
