import { Injectable } from '@angular/core';
import { Router, NavigationExtras, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) {
    
   }

   navigate(commands: any[], extras?: NavigationExtras): Promise<boolean> {
     return this.router.navigate(commands, extras);
   }

   navigateByUrl(url: string | UrlTree, extras?: NavigationExtras): Promise<boolean> {
    return this.router.navigateByUrl(url, extras);
   }

}
