import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorDaysNumber'
})
export class PriorDaysNumberPipe implements PipeTransform {

  transform(value: Date, args?: any): any {
    let todaysDate = new Date();
    
    const diffTime = Math.abs(todaysDate.getTime() - value.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;                                                                          
  }

}
