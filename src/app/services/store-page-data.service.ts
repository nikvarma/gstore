import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorePageDataService {

  constructor() { }

  getItems(): Observable<any> {
    return of({});
  }
}
