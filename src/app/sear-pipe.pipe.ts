import { Pipe, PipeTransform } from '@angular/core';
// :
// ()
//  {{ } }
// @
// <>
// * 
//  #
//  ?
//  ""
//  $
//  |
//  ++
//  &
//  !
@Pipe({
  name: 'searPipe'
})
export class SearPipePipe implements PipeTransform {
//   transform(value: any, args?: any): any {
//     console.log(value);
//     console.log(args);
//      if(!value)return null;
//      if (!args) return value;
//     //   if(!args)return ;
//     // if (!value || !value.length) return [];
//     args = args.toLowerCase();

//     return value.filter(function(item){
//         return JSON.stringify(item).toLowerCase().includes(args);
//     });
// }
  transform(value: any,args:any): any {
   
     if(!value)return null;
     if (!args) return value;
     
    return value.filter(function(item){
        return JSON.stringify(item).toLowerCase().includes(args);
    });
  }

}
 