import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmnistracionClientesComponent } from './components/admnistracion-clientes.component';
import { ClientesComponent } from './components/clientes.component';


const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'clientes'},
  {path:'clientes', component:AdmnistracionClientesComponent},
  {path:'clientes/form', component:ClientesComponent},
  {path:'clientes/form/:id', component:ClientesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
