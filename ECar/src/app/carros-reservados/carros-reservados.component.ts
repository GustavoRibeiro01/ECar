import { Component, OnInit } from '@angular/core';
import { CarroService } from '../Service/carro.service';
import { AutenticacaoService } from '../Service/autenticacao.service';
import { Router } from '@angular/router';
import { Usuario } from '../Classes/usuario';
import { Carro } from '../Classes/carro';
import { UploadImageService } from '../Service/upload-image.service';

@Component({
  selector: 'app-carros-reservados',
  templateUrl: './carros-reservados.component.html',
  styleUrls: ['./carros-reservados.component.css']
})
export class CarrosReservadosComponent implements OnInit {

  currentUser: Usuario
  carrosReservados: Carro[]
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

      this.complementPath = this._ImageService.getPathComplement()
      this.carrosReservados = this._carroService.getCurrentCars()

      if(this.carrosReservados != null)
      {
        if(this.currentUser.Id == 5)
        {
          this.carrosReservados = this._carroService.getCurrentCars().filter(car => car.CarroReservado > 0)
        }
        else
        {
          this.carrosReservados = this._carroService.getCurrentCars().filter(car => car.CarroReservado == this.currentUser.Id)
        }
        
      }

    }
   
  }


  changeRouteReservados = () =>{
    this.route.navigateByUrl("menu/carrosReservados")
  }
  
  changeRouteFavoritos = () =>{
    this.route.navigateByUrl("menu/carrosFavoritos")
  }

  changeRouteHome = () =>{
    if(this.currentUser.Id == 5){
      this.route.navigateByUrl("home/adm")
    }
    else{
      this.route.navigateByUrl("home")
    }
    
  }
  
  logout = () =>{
    this._authService.logout()
    this.route.navigateByUrl("/autenticacao/login")
  }

}
