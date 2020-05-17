import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesLayoutComponent } from './recipes-layout.component';
import { RecipesComponent } from './recipes.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { AntComponentModule } from 'src/app/ant-component.module';



@NgModule({
  declarations: [
    RecipesComponent,
    RecipesLayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AntComponentModule,
    RouterModule.forChild([
      {
        path: '', component: RecipesLayoutComponent, children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component: RecipesComponent }
        ]
      }
    ])
  ]
})
export class RecipesModule { }
