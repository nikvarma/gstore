import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    BlogsComponent,
    DetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BlogsComponent,
    DetailComponent
  ]
})
export class BlogsModule { }
