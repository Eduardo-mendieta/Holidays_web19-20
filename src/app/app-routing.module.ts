import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUsuarioComponent } from './components/Persona/add-usuario/add-usuario.component';
import { ListarUsuarioComponent } from './components/Persona/listar-usuario/listar-usuario.component';
import { EditUsuarioComponent } from './components/Persona/edit-usuario/edit-usuario.component';
<<<<<<< HEAD
import { AddAlojamientoComponent } from './components/Alojamiento/add-alojamiento/add-alojamiento.component';
import { UpdateAlojamientoComponent } from './components/Alojamiento/update-alojamiento/update-alojamiento.component';
=======
<<<<<<< HEAD
import { LoginComponent } from './components/login/login.component';
=======
// tslint:disable-next-line: max-line-length
import { ListarAlojamientoDisponibleComponent } from './components/Alojamiento/listar-alojamiento-disponible/listar-alojamiento-disponible.component';
import { HomeComponent } from './components/home/home.component';
>>>>>>> aa65d8c21248115aa965f2b65c15df4b19d3c47d
>>>>>>> f034fe761dab19751688d2db76bc043f578108d6


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'alojamientos-disponibles', component: ListarAlojamientoDisponibleComponent},
  {path: 'crearUsuario', component: AddUsuarioComponent },
  {path: 'listarUsuario', component: ListarUsuarioComponent},
  {path: 'editarUsuario', component: EditUsuarioComponent},
<<<<<<< HEAD
  {path: 'crearAlojamiento', component: AddAlojamientoComponent },
  {path: 'editarAlojamiento', component: UpdateAlojamientoComponent}
=======
<<<<<<< HEAD
  {path: 'login', component: LoginComponent}
=======
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
>>>>>>> aa65d8c21248115aa965f2b65c15df4b19d3c47d
>>>>>>> f034fe761dab19751688d2db76bc043f578108d6
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
