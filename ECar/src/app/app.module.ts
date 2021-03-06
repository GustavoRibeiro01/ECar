import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MzButtonModule, MzInputModule } from 'ngx-materialize';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { OwlModule } from 'ngx-owl-carousel';

import { MzCheckboxModule } from 'ngx-materialize';
import { MzNavbarModule } from 'ngx-materialize'
import { MzSidenavModule } from 'ngx-materialize'
import { MzToastModule } from 'ngx-materialize';

import { DashcarrosComponent } from './dashcarros/dashcarros.component';
import { CarroDetailComponent } from './carro-detail/carro-detail.component';
import { CadastroUsuarioComponent } from './Cadastros/cadastro-usuario/cadastro-usuario.component';
import { HomeAdmComponent } from './home-adm/home-adm.component';
import { CarrosFavoritosComponent } from './carros-favoritos/carros-favoritos.component';
import { CarrosReservadosComponent } from './carros-reservados/carros-reservados.component';
import { CadastroProdutoComponent } from './Cadastros/cadastro-produto/cadastro-produto.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashcarrosComponent,
    CarroDetailComponent,
    CadastroUsuarioComponent,
    HomeAdmComponent,
    CarrosFavoritosComponent,
    CarrosReservadosComponent,
    CadastroProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MzButtonModule,
    MzInputModule,
    MzCheckboxModule,
    MzNavbarModule,
    MzSidenavModule,
    MzToastModule,
    OwlModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
