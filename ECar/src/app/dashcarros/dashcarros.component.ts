import { Component, OnInit } from '@angular/core';
import { CarroService } from '../Service/carro.service';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../Service/autenticacao.service';
import { Usuario } from '../Classes/usuario';
import { Carro } from '../Classes/carro';
import { UploadImageService } from '../Service/upload-image.service';


@Component({
  selector: 'app-dashcarros',
  templateUrl: './dashcarros.component.html',
  styleUrls: ['./dashcarros.component.css']
})
export class DashcarrosComponent implements OnInit {

  ListaCarros: object[]
  currentUser: Usuario
  complementPath
  
  constructor(
    private carroService: CarroService,
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
    else
    {
      this.complementPath = this._ImageService.getPathComplement()
      this.listarCarros()
    }
    
  }

  listarCarros = () =>{

    this.carroService.getCarrosUsuario(this.currentUser.Id).then(response => {

      this.ListaCarros = (response as Carro[]).filter(car => car.CarroReservado == 0)
      console.log(response as Carro[])

    }).catch(erro =>{

      console.log(erro)

    })
  }

  pathImage = (carro: Carro) =>{
    return `${this.complementPath}${carro.Image}`
  }

  adicionar = (carro: any) =>{
    carro.CarroFavorito = !carro.CarroFavorito
    this.carroFavorito(carro.Id, carro.CarroFavorito)
  }

  changeRoute = (car: Carro) =>{
    this.carroService.setCurrentCar(car)
    this.route.navigateByUrl("home/carroDetail")
  }

  changeRouteReservados = () =>{
    this.route.navigateByUrl("menu/carrosReservados")
  }

  changeRouteFavoritos = () =>{
    this.route.navigateByUrl("menu/carrosFavoritos")
  }

  carroFavorito = (idCarro, value) =>{
    let idUsuario = this._authService.getCurrentUser().Id
    this.carroService.carroFavorito({IdCarro: idCarro, IdUsuario: idUsuario, Value: value})
  }

  logout = () =>{
    this._authService.logout()
    this.route.navigateByUrl("/autenticacao/login")
  }

}
