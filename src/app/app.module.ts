import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaAlojamientoComponent } from './components/Alojamiento/busqueda-alojamiento/busqueda-alojamiento.component';
import { AddUsuarioComponent } from './components/Persona/add-usuario/add-usuario.component';
import { ListarUsuarioComponent } from './components/Persona/listar-usuario/listar-usuario.component';
import { EditUsuarioComponent } from './components/Persona/edit-usuario/edit-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { AlojamientoDetalleComponent } from './components/alojamiento-detalle/alojamiento-detalle.component';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { HomeComponent } from './components/home/home.component';
import { TarjetaAlojamientoComponent } from './components/Alojamiento/tarjeta-alojamiento/tarjeta-alojamiento.component';
import { ListarAlojamientoDisponibleComponent } from './components/Alojamiento/listar-alojamiento-disponible/listar-alojamiento-disponible.component';
import { UsuarioService } from './service/usuario.service';


@NgModule({
  declarations: [
    AppComponent,
    BusquedaAlojamientoComponent,
    AddUsuarioComponent,
    ListarUsuarioComponent,
    EditUsuarioComponent,
    LoginComponent,
    AlojamientoDetalleComponent,
    MenuNavComponent,
    SesionComponent,
    HomeComponent,
    TarjetaAlojamientoComponent,
    ListarAlojamientoDisponibleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
