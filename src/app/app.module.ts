import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaAlojamientoComponent } from './components/Alojamiento/busqueda-alojamiento/busqueda-alojamiento.component';
import { AddUsuarioComponent } from './components/Persona/add-usuario/add-usuario.component';
import { ListarUsuarioComponent } from './components/Persona/listar-usuario/listar-usuario.component';
import { EditUsuarioComponent } from './components/Persona/edit-usuario/edit-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { HomeComponent } from './components/home/home.component';
import { TarjetaAlojamientoComponent } from './components/Alojamiento/tarjeta-alojamiento/tarjeta-alojamiento.component';
// tslint:disable-next-line: max-line-length
import { ListarAlojamientoDisponibleComponent } from './components/Alojamiento/listar-alojamiento-disponible/listar-alojamiento-disponible.component';
import { UsuarioService } from './service/usuario.service';
import { AlojamientoDetalleComponent } from './components/alojamiento/alojamiento-detalle/alojamiento-detalle.component';
import { HttpClientModule } from '@angular/common/http';
import { AlojamientoService } from './service/alojamiento.service';
import { UpdateAlojamientoComponent } from './components/Alojamiento/update-alojamiento/update-alojamiento.component';
import { AddAlojamientoComponent } from './components/Alojamiento/add-alojamiento/add-alojamiento.component';
import { DetalleUsuarioComponent } from './components/Persona/detalle-usuario/detalle-usuario.component';
import { ListarAlojamientoUsuComponent } from './components/Alojamiento/listar-alojamiento-usu/listar-alojamiento-usu.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaAlojamientoComponent,
    AddUsuarioComponent,
    ListarUsuarioComponent,
    EditUsuarioComponent,
    AddAlojamientoComponent,
    UpdateAlojamientoComponent,
    LoginComponent,
    AlojamientoDetalleComponent,
    MenuNavComponent,
    SesionComponent,
    HomeComponent,
    TarjetaAlojamientoComponent,
    ListarAlojamientoDisponibleComponent,
    DetalleUsuarioComponent,
    ListarAlojamientoUsuComponent
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
