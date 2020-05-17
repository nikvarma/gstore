import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { BlogsComponentLayout } from 'src/app/shared/layouts/blogs/blogs.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { AntComponentModule } from 'src/app/ant-component.module';

@NgModule({
  declarations: [
    BlogsComponent,
    DetailComponent,
    BlogsComponentLayout
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AntComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: BlogsComponentLayout, children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component: BlogsComponent }
        ]
      }
    ])
  ],
  exports: [
    BlogsComponent,
    DetailComponent
  ]
})
export class BlogsModule { }
