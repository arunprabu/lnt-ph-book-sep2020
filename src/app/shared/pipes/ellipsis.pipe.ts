import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(args[0]);
    value = value.substring(0, args[0]);
    return value + '...';
  }

}
