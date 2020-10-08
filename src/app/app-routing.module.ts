import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUsuarioComponent } from './components/Persona/add-usuario/add-usuario.component';
import { ListarUsuarioComponent } from './components/Persona/listar-usuario/listar-usuario.component';
import { EditUsuarioComponent } from './components/Persona/edit-usuario/edit-usuario.component';
import { AddAlojamientoComponent } from './components/Alojamiento/add-alojamiento/add-alojamiento.component';
import { UpdateAlojamientoComponent } from './components/Alojamiento/update-alojamiento/update-alojamiento.component';


const routes: Routes = [
  {path: 'crearUsuario', component: AddUsuarioComponent },
  {path: 'listarUsuario', component: ListarUsuarioComponent},
  {path: 'editarUsuario', component: EditUsuarioComponent},
  {path: 'crearAlojamiento', component: AddAlojamientoComponent },
  {path: 'editarAlojamiento', component: UpdateAlojamientoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
