import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './layouts';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import { UserLandingComponent } from './layouts/user-landing/user-landing.component';

@NgModule({
  declarations: [
    LandingComponent,
    UserLandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ], exports: [
    RouterModule,
    LandingComponent,
    ComponentsModule,
    UserLandingComponent
  ]
})
export class SharedModule { }
