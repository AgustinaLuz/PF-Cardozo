import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from 'src/app/dashboard/pages/tables/tables.component';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: Alumno, ...args: unknown[]): unknown {
    console.log(args);

    const newValue = `${value.name} ${value.last_name}`; 

    switch (args[0]) {
      case 'uppercase':
        return newValue.toUpperCase();
      case 'lowercase':
        return newValue.toLowerCase();
        
       default:
        return newValue; 
    }


  }

}
