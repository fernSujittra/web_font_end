import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PorkfeedService } from '../porkfeed.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-porkfeed-edit',
  templateUrl: './porkfeed-edit.component.html',
  styleUrls: ['./porkfeed-edit.component.scss']
})
export class PorkfeedEditComponent implements OnInit {
  inputForm: FormGroup;
  model: any;
  messageError: boolean;
  messageSuccess: boolean;
  message: string;
  id: any;

  constructor(
    private porkfeedService: PorkfeedService,
    private location: Location,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe(result => {
      this.id = result['idPorkfeed'];
    });
  }

  ngOnInit() {
    this.messageError = false;
    this.messageSuccess = false;
    this.buildForm();
    this.InitialData();
  }

  InitialData() {
    this.porkfeedService.getPorkfeedById(this.id).subscribe(result => {
      if (result) {
        this.inputForm.patchValue(result);
        this.inputForm.controls['idPorkfeed'].setValue(this.id);
      }
    });
  }

  onSubmit() {
    this.model = this.inputForm.value;
    this.porkfeedService.edit(this.model).subscribe(model => {
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
