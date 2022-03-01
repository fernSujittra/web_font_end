import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { DividedService } from './divided.service';

@Component({
  selector: 'app-divided',
  templateUrl: './divided.component.html',
  styleUrls: ['./divided.component.scss']
})
export class DividedComponent implements OnInit {

  dividedModel: any;
  selected: any[];
  dividedList: any[];
  inputForm: FormGroup;
  yearData: any;
  constructor(
    private dividedService: DividedService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    // this.getDividedList();
    this.inputForm = this.formBuilder.group({
      'yearData': [''],
    });
    return this.inputForm;
  }

  getDividedList() {
    const data = this.inputForm.controls['yearData'].value;
    if(null != data && '' != data){
    this.dividedService.getdivideist(data).subscribe(result => {
      this.dividedList = result;
    });
    }
  }
}
