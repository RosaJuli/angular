import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContacComponent } from './pages/contac/contac.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path:'contact',
    title:'Contacto',
    component: ContacComponent
  },
  {
    title:'Productos',
    path:'products',
    component: ProductsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
