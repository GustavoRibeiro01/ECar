import { Component, OnInit } from '@angular/core';
import { CarroService } from '../Service/carro.service';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../Service/autenticacao.service';
import { Usuario } from '../Classes/usuario';
import { Carro } from '../Classes/carro';


@Component({
  selector: 'app-dashcarros',
  templateUrl: './dashcarros.component.html',
  styleUrls: ['./dashcarros.component.css']
})
export class DashcarrosComponent implements OnInit {

  ListaCarros: object[]
  currentUser: Usuario
  
  constructor(
    private carroService: CarroService,
    private _authService: AutenticacaoService,
    private route: Router
  ) {
    this.currentUser = this._authService.getCurrentUser()
    
   }

  ngOnInit() {
    
      this.listarCarros()
    
  }

  listarCarros = () =>{

    this.carroService.getCarrosUsuario(this.currentUser.Id).then(response => {

      this.ListaCarros = (response as Carro[]).filter(car => car.CarroReservado == 0)

    }).catch(erro =>{

      console.log(erro)

    })
  }

  adicionar = (carro: any) =>{
    carro.CarroFavorito = !carro.CarroFavorito
    this.carroFavorito(carro.Id, carro.CarroFavorito)
  }

  changeRoute = (car: Carro) =>{
    this.carroService.setCurrentCar(car)
    this.route.navigateByUrl("home/carroDetail")
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
