import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'carbon-components-angular';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports:[
    ButtonModule
  ]
})
export class CarbonComponentModule { }
