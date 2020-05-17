import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorsComponent } from './pages/errors/errors.component';

const routes: Routes = [
  { path: '', redirectTo: 'store', pathMatch: 'full' },
  { path: 'store', loadChildren:() => import('./store.module').then(m => m.AppStoreModule) },
  { path: 'blogs', loadChildren:() => import('./pages/blogs/blogs.module').then(m => m.BlogsModule) },
  { path: 'recipes', loadChildren:() => import('./pages/recipes/recipes.module').then(m => m.RecipesModule) },
  { path: '**', component: ErrorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }