import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../Service/autenticacao.service';
import { CarroService } from '../Service/carro.service';
import { Usuario } from '../Classes/usuario';

@Component({
  selector: 'app-carros-favoritos',
  templateUrl: './carros-favoritos.component.html',
  styleUrls: ['./carros-favoritos.component.css']
})
export class CarrosFavoritosComponent implements OnInit {

  currentUser: Usuario
  CarrosFavoritos: any[]

  constructor(
    private _carroService: CarroService,
    private _authService: AutenticacaoService,
    private route: Router
  ) { 
    this.currentUser = this._authService.getCurrentUser()
  }

  ngOnInit() {
    console.log(this._carroService.getCurrentCars())
    this.CarrosFavoritos = this._carroService.getCurrentCars().filter(f => f.CarroFavorito)
  }

  adicionar = (carro: any) =>{
    carro.CarroFavorito = !carro.CarroFavorito
    this.carroFavorito(carro.Id, carro.CarroFavorito)
  }

  carroFavorito = (idCarro, value) =>{
    let idUsuario = this._authService.getCurrentUser().Id
    this._carroService.carroFavorito({IdCarro: idCarro, IdUsuario: idUsuario, Value: value})
  }

  changeRouteFavoritos = () =>{
    this.route.navigateByUrl("menu/carrosFavoritos")
  }
  
  logout = () =>{
    this._authService.logout()
    this.route.navigateByUrl("/autenticacao/login")
  }

}
