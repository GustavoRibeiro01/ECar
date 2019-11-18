import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../Service/autenticacao.service';
import { CarroService } from '../Service/carro.service';
import { Usuario } from '../Classes/usuario';
import { UploadImageService } from '../Service/upload-image.service';

@Component({
  selector: 'app-carros-favoritos',
  templateUrl: './carros-favoritos.component.html',
  styleUrls: ['./carros-favoritos.component.css']
})
export class CarrosFavoritosComponent implements OnInit {

  currentUser: Usuario
  CarrosFavoritos: any[]
  complementPath

  constructor(
    private _carroService: CarroService,
    private _authService: AutenticacaoService,
    private _ImageService: UploadImageService,
    private route: Router
  ) { 
    this.currentUser = this._authService.getCurrentUser()

    if(this.currentUser == null)
    {
      this.currentUser = new Usuario('','','','')
    }
  }

  ngOnInit() {
    
    if(this.currentUser.Id == undefined) {

      alert("Usuario deslogado! Por favor faça seu login")
      this.route.navigateByUrl("autenticacao/login")

    }
    else{

      this.CarrosFavoritos = this._carroService.getCurrentCars()

      if(this.CarrosFavoritos != null)
      {
        this.complementPath = this._ImageService.getPathComplement()
        this.CarrosFavoritos = this._carroService.getCurrentCars().filter(f => f.CarroFavorito && f.CarroReservado == 0)
      }
      
    }
   
  }

  adicionar = (carro: any) =>{
    carro.CarroFavorito = !carro.CarroFavorito
    this.carroFavorito(carro.Id, carro.CarroFavorito)
  }

  carroFavorito = (idCarro, value) =>{
    let idUsuario = this._authService.getCurrentUser().Id
    this._carroService.carroFavorito({IdCarro: idCarro, IdUsuario: idUsuario, Value: value})
  }

  changeRouteReservas = () =>{
    this.route.navigateByUrl("menu/carrosReservados")
  }

  changeRouteFavoritos = () =>{
    this.route.navigateByUrl("menu/carrosFavoritos")
  }
  
  logout = () =>{
    this._authService.logout()
    this.route.navigateByUrl("/autenticacao/login")
  }

}
