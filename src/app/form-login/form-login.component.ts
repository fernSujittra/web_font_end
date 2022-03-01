import { AuthenService } from './authen.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  [x: string]: any;
  inputForm: FormGroup;
  model: any = {};
  messageError: boolean;
  messageSuccess: boolean;
  message: string;
  UserName: any;
  password: any;
  constructor(
    private router: Router,
    private authenService: AuthenService,
    private formBuilder: FormBuilder,
  ) {

  }

  ngOnInit(): void {
    this.messageError = false;
    this.messageSuccess = false;
    this.buildForm();
  }

  login() {
    // console.log(" === this.authenService.auth  === " ,this.authenService.getSso());
    this.model = this.inputForm.value;
    this.UserName = this.inputForm.value;
    this.password = this.inputForm.value;
    this.authenService.auth(this.model.UserName, this.model.password).subscribe(model => {
      if (model.result) {
        this.authenService.setSsoRoleType(model.message);
        this.authenService.setSso(model.body);

        this.messageSuccess = true;
        this.messageError = false;
        this.router.navigate(['/home/profile'], {});
      } else {
        this.messageSuccess = false;
        this.messageError = true;
      }
      this.message = model.message;
    });
  }

  buildForm() {
    this.inputForm = this.formBuilder.group({
      'UserName': [''],
      'password': ['']
    });
  }

  onBackLocation() {
    this.location.back();
  }

}
