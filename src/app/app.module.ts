import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaAlojamientoComponent } from './components/busqueda-alojamiento/busqueda-alojamiento.component';
import { AddUsuarioComponent } from './components/Persona/add-usuario/add-usuario.component';
import { ListarUsuarioComponent } from './components/Persona/listar-usuario/listar-usuario.component';
import { EditUsuarioComponent } from './components/Persona/edit-usuario/edit-usuario.component';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from './service/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaAlojamientoComponent,
    AddUsuarioComponent,
    ListarUsuarioComponent,
    EditUsuarioComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
