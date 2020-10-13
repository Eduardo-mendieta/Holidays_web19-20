import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUsuarioComponent } from './components/Persona/add-usuario/add-usuario.component';
import { ListarUsuarioComponent } from './components/Persona/listar-usuario/listar-usuario.component';
import { EditUsuarioComponent } from './components/Persona/edit-usuario/edit-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AddAlojamientoComponent } from './components/Alojamiento/add-alojamiento/add-alojamiento.component';
import { UpdateAlojamientoComponent } from './components/Alojamiento/update-alojamiento/update-alojamiento.component';
// tslint:disable-next-line: max-line-length
import { ListarAlojamientoDisponibleComponent } from './components/Alojamiento/listar-alojamiento-disponible/listar-alojamiento-disponible.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'alojamientos/buscar', component: ListarAlojamientoDisponibleComponent},
  { path: 'alojamientos/nuevo', component: AddAlojamientoComponent },
  {path: 'usuarios/registro', component: AddUsuarioComponent },
  {path: 'usuarios/editar', component: EditUsuarioComponent},
  {path: 'usuarios/login', component: LoginComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
