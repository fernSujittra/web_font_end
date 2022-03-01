import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
@Pipe({
  name: 'checkDate'
})
export class CheckDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const dateSendingToServer = new DatePipe('th-TH').transform(value, 'dd/MM/yyyy')
    return dateSendingToServer;
  }

}
