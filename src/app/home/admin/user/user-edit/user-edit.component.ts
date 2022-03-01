import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  inputForm: FormGroup;
  model: any;
  messageError: boolean;
  messageSuccess: boolean;
  message: string;
  id: any;
  roleList: any[];

  constructor(
    private uerService: UserService,
    private location: Location,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe(result => {
      this.id = result['iduser'];
    });
  }

  ngOnInit() {
    this.messageError = false;
    this.messageSuccess = false;
    this.buildForm();
    this.getRoleList();
    this.InitialData();
  }

  getRoleList() {
    this.uerService.getRoleList().subscribe(result => {
      this.roleList = result;
    });
  }

  onSubmit() {
    this.model = this.inputForm.value;
    this.uerService.edit(this.model).subscribe(model => {
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

  InitialData() {
    this.uerService.getUserById(this.id).subscribe(result => {
      if (result) {
        this.inputForm.patchValue(result);
      }
    });
  }

  buildForm() {
    this.inputForm = this.uerService.buildForm();
  }

  onBackLocation() {
    this.location.back();
  }

}
