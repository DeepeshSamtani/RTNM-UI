import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kpiSearch'
})
export class KpiSearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {

    console.log(' items: ' + JSON.stringify(items));
    console.log('searchText : ' + searchText);

    if (items && items.length === 0 ) {
      return [];
    };

    if (!searchText || searchText === ''){ 
      return items;
    };

    if(searchText) {
      searchText = searchText.toLowerCase();
    }
    
    return items.filter((it: any) => {
      console.log('Return item : ' + JSON.stringify(it));
      if (it.displayName.toLowerCase().indexOf(searchText) !== -1)
        return true;
    });
  }
}

