import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component'
import { DashcarrosComponent } from './dashcarros/dashcarros.component'
import { CarroDetailComponent } from './carro-detail/carro-detail.component'
import { CadastroUsuarioComponent } from './Cadastros/cadastro-usuario/cadastro-usuario.component'
import { HomeAdmComponent } from './home-adm/home-adm.component'
import { CarrosFavoritosComponent } from './carros-favoritos/carros-favoritos.component'


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'autenticacao/login', component: LoginComponent },
  { path: 'autenticacao/cadastroUsuario', component: CadastroUsuarioComponent },
  { path: 'home', component: DashcarrosComponent },
  { path: 'home/carroDetail', component: CarroDetailComponent },
  { path: 'home/adm', component: HomeAdmComponent },
  { path: 'menu/carrosFavoritos', component: CarrosFavoritosComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
