import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {
    constructor() { }

    dynamicSort(property: string) {
        var sortOrder = 1;
    
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
    
        return function (a: any,b: any) {
            if(sortOrder == -1){
                return b[property].localeCompare(a[property]);
            }else{
                return a[property].localeCompare(b[property]);
            }        
        }
    }
}

