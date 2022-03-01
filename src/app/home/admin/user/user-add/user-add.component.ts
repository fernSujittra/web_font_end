
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  inputForm: FormGroup;
  model: any;
  messageError: boolean;
  messageSuccess: boolean;
  message: string;
  roleList: any[];

  constructor(
    private uerService: UserService,
    private location: Location,

  ) { }

  ngOnInit() {
    this.messageError = false;
    this.messageSuccess = false
    this.getRoleList();
    this.buildForm();
  }

  getRoleList() {
    this.uerService.getRoleList().subscribe(result => {
      this.roleList = result;
    });
  }

  onSubmit() {
    this.model = this.inputForm.value;
    this.uerService.addUser(this.model).subscribe(model => {
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
    this.inputForm = this.uerService.buildForm();
  }

  onBackLocation() {
    this.location.back();
  }

}
