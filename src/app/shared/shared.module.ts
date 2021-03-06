import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './layouts';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ], exports: [
    RouterModule,
    LandingComponent,
    ComponentsModule
  ]
})
export class SharedModule { }
