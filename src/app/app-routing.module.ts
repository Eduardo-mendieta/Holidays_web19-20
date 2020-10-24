import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUsuarioComponent } from './components/Persona/add-usuario/add-usuario.component';
import { EditUsuarioComponent } from './components/Persona/edit-usuario/edit-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AddAlojamientoComponent } from './components/Alojamiento/add-alojamiento/add-alojamiento.component';
// tslint:disable-next-line: max-line-length
import { ListarAlojamientoDisponibleComponent } from './components/Alojamiento/listar-alojamiento-disponible/listar-alojamiento-disponible.component';
import { AlojamientoDetalleComponent } from './components/Alojamiento/alojamiento-detalle/alojamiento-detalle.component';
import { CommonModule } from '@angular/common';
import { ListarUsuarioComponent } from './components/Persona/listar-usuario/listar-usuario.component';
import { DetalleUsuarioComponent } from './components/Persona/detalle-usuario/detalle-usuario.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'alojamientos/buscar', component: ListarAlojamientoDisponibleComponent},
  {path: 'alojamientos/nuevo/:id', component: AddAlojamientoComponent },
  {path: 'usuarios/registro', component: AddUsuarioComponent },
  {path: 'usuarios/editar/:correo', component: EditUsuarioComponent},
  {path: 'usuarios/login', component: LoginComponent},
  {path: 'alojamientos/{id}', component: AlojamientoDetalleComponent},
  {path: 'usuarios/listar', component: ListarUsuarioComponent},
  {path: 'usuarios/detalle/:correo', component: DetalleUsuarioComponent},
  {path: 'alojamientos/detalle/:id', component: AlojamientoDetalleComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
imports: [
  CommonModule,
  RouterModule.forRoot(
    routes,
    { enableTracing: true }
  )
],
declarations: [],
exports : [
  RouterModule
],
})
export class AppRoutingModule { }
