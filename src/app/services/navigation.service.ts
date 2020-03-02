import { Injectable } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from 'express';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

}
