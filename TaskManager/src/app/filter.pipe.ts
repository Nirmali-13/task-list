import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: string[], ...args: string[]): string[] {
    
    const userInput:string = args[0];
    return value.filter(a=>a.toLowerCase().includes(userInput.toLowerCase()))
    
  }


}
