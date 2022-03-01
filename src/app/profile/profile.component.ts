import { Component, OnInit, ViewChild } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/filter';
import { AuthenService } from '../form-login/authen.service';
import { FormGroup, FormBuilder } from '@angular/forms';

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  inputForm: FormGroup;
  userDetail: any;
  roleType: any = 'พนักงาน';
  public typeaheadBasicModel: any;
  public typeaheadFocusModel: any;

  constructor(
    private authenService: AuthenService,
    private formBuilder: FormBuilder,
  ) {
    this.userDetail = this.authenService.getSso();
    this.roleType = this.authenService.getSsoRoleType();
  }

  ngOnInit() {
    console.log('this.roleType', this.roleType);
    this.buildForm();
    this.InitialData();
  }

  buildForm() {
    this.inputForm = this.formBuilder.group({
    'iduser': [''],
    'idrole': [''],
    'username': [''],
    'password': [''],
    'fname': [''],
    'lname': [''],
    'cardId': [''],
    'birthDate': [''],
    'age': [''],
    'sex': [''],
    'phone': [''],
    'career': [''],
    'earnings': [''],
    'investment': [''],
    'receipt': ['']
    });
  }

  InitialData() {
  this.inputForm.controls['iduser'].setValue(this.userDetail.iduser);
  this.inputForm.controls['idrole'].setValue(this.userDetail.idrole);
  this.inputForm.controls['username'].setValue(this.userDetail.username);
  this.inputForm.controls['password'].setValue(this.userDetail.password);
  this.inputForm.controls['fname'].setValue(this.userDetail.fname);
  this.inputForm.controls['lname'].setValue(this.userDetail.lname);
  this.inputForm.controls['cardId'].setValue(this.userDetail.cardId);
  this.inputForm.controls['birthDate'].setValue(this.userDetail.birthDate);
  this.inputForm.controls['age'].setValue(this.userDetail.age);
  this.inputForm.controls['sex'].setValue(this.userDetail.sex);
  this.inputForm.controls['phone'].setValue(this.userDetail.phone);
  this.inputForm.controls['career'].setValue(this.userDetail.career);
  this.inputForm.controls['earnings'].setValue(this.userDetail.earnings);
  this.inputForm.controls['investment'].setValue(this.userDetail.investment);
  this.inputForm.controls['receipt'].setValue(this.userDetail.receipt);
  this.inputForm.disable();
  }

}
