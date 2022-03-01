import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PorkfeedService } from '../porkfeed.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-porkfeed-add',
  templateUrl: './porkfeed-add.component.html',
  styleUrls: ['./porkfeed-add.component.scss']
})
export class PorkfeedAddComponent implements OnInit {
  inputForm: FormGroup;
  model: any;
  messageError: boolean;
  messageSuccess: boolean;
  message: string;

  constructor(
    private porkfeedService: PorkfeedService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.messageError = false;
    this.messageSuccess = false
    this.buildForm();
  }

  onSubmit() {
    this.model = this.inputForm.value;
    this.porkfeedService.addPorkfeed(this.model).subscribe(model => {
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
    this.inputForm = this.porkfeedService.buildForm();

    this.inputForm.controls['porkfeedQuantityCost'].valueChanges.subscribe(item => {
      const value = this.inputForm.controls['porkfeedPriceCost'].value*item;
      this.inputForm.controls['sumCost'].setValue(value);
    })
    this.inputForm.controls['porkfeedPriceCost'].valueChanges.subscribe(item => {
      const value = item * this.inputForm.controls['porkfeedQuantityCost'].value;
      this.inputForm.controls['sumCost'].setValue(value);
    })

    this.inputForm.controls['porkfeedQuantity'].valueChanges.subscribe(item => {
      const value = this.inputForm.controls['porkfeedPrice'].value*item;
      this.inputForm.controls['sumPrice'].setValue(value);
    })
    this.inputForm.controls['porkfeedPrice'].valueChanges.subscribe(item => {
      const value = item * this.inputForm.controls['porkfeedQuantity'].value;
      this.inputForm.controls['sumPrice'].setValue(value);
    })
  }

  onBackLocation() {
    this.location.back();
  }

}
