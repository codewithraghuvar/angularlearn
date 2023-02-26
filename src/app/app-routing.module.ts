import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ContainerComponent } from './container/container.component';
import { UserComponent } from './user/user.component';

import { ErrorComponent } from './error/error.component';
const routes: Routes = [
  //{path: '', component: ContainerComponent},
  { path: '',   redirectTo: 'men', pathMatch: 'full' },
  {path: 'men', component: ContainerComponent},
  {path: 'women', component: ContainerComponent},  
  {path: 'kids', component: ContainerComponent},  
  
  {path: 'add-product', component: AddProductComponent},
  {path:'profile',component:UserComponent},
  {path: '**', component: ErrorComponent}, 
  // always add error route at end because ** will match all route 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
