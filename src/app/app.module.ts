import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaAlojamientoComponent } from './components/Alojamiento/busqueda-alojamiento/busqueda-alojamiento.component';
import { AddUsuarioComponent } from './components/Persona/add-usuario/add-usuario.component';
import { ListarUsuarioComponent } from './components/Persona/listar-usuario/listar-usuario.component';
import { EditUsuarioComponent } from './components/Persona/edit-usuario/edit-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from './service/usuario.service';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { AddAlojamientoComponent } from './components/Alojamiento/add-alojamiento/add-alojamiento.component';
import { UpdateAlojamientoComponent } from './components/Alojamiento/update-alojamiento/update-alojamiento.component';
import { AlojamientoService } from './service/alojamiento.service';
=======
import { LoginComponent } from './components/login/login.component';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { HomeComponent } from './components/home/home.component';
import { TarjetaAlojamientoComponent } from './components/Alojamiento/tarjeta-alojamiento/tarjeta-alojamiento.component';
// tslint:disable-next-line: max-line-length
import { ListarAlojamientoDisponibleComponent } from './components/Alojamiento/listar-alojamiento-disponible/listar-alojamiento-disponible.component';
<<<<<<< HEAD
import { AlojamientoDetalleComponent } from './components/alojamiento-detalle/alojamiento-detalle.component';
=======

>>>>>>> aa65d8c21248115aa965f2b65c15df4b19d3c47d
>>>>>>> f034fe761dab19751688d2db76bc043f578108d6
>>>>>>> f04f3fba5155ccc560f92ede3d076cca5f742fab

@NgModule({
  declarations: [
    AppComponent,
    BusquedaAlojamientoComponent,
    AddUsuarioComponent,
    ListarUsuarioComponent,
    EditUsuarioComponent,
<<<<<<< HEAD
    AddAlojamientoComponent,
    UpdateAlojamientoComponent,
=======
    LoginComponent,
    AlojamientoDetalleComponent,
    MenuNavComponent,
    SesionComponent,
    HomeComponent,
    TarjetaAlojamientoComponent,
    ListarAlojamientoDisponibleComponent,
<<<<<<< HEAD
=======
>>>>>>> aa65d8c21248115aa965f2b65c15df4b19d3c47d
>>>>>>> f034fe761dab19751688d2db76bc043f578108d6
>>>>>>> f04f3fba5155ccc560f92ede3d076cca5f742fab
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UsuarioService, AlojamientoService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
