import { Component, OnInit } from '@angular/core';
import { CarroService } from '../Service/carro.service';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../Service/autenticacao.service';
import { Usuario } from '../Classes/usuario';
import { Carro } from '../Classes/carro';

@Component({
  selector: 'app-carro-detail',
  templateUrl: './carro-detail.component.html',
  styleUrls: ['./carro-detail.component.css']
})
export class CarroDetailComponent implements OnInit {

  currentUser: Usuario
  currentCar: Carro
  carro: any

  constructor(
    private _carroService: CarroService,
    private _authService: AutenticacaoService,
    private route: Router
  ) { 
    this.currentUser = this._authService.getCurrentUser()

    if(this.currentUser == null)
    {
      this.currentUser = new Usuario('','','','')
    }

    this.currentCar = this._carroService.getCurrentCar()

    if(this.currentCar == null)
    {
      this.currentCar = new Carro('','', 0)
    }

  }

  ngOnInit() {

    if(this.currentUser.Id == undefined) {

      alert("Usuario deslogado! Por favor faça seu login")
      this.route.navigateByUrl("autenticacao/login")

    }

    if(this.currentCar.Id == undefined) {

      this.route.navigateByUrl("home")

    }
  }

  reservarCarro = () =>{

    let obj = {
      IdCarro: this.currentCar.Id,
      IdUsuario: this.currentUser.Id
    }

    this._carroService.reservarCarro(obj)
      .then(
        response =>{
          if(response > 0)
          {
            this.currentCar.CarroReservado = this.currentUser.Id
            this.route.navigateByUrl("/home")
          }
          else
          {
            alert("Não foi possivel realizar a reserva!")
            this.route.navigateByUrl("/home")
          }
        }
      )
  }

  title = 'OwlCarousel2 in Angular7 with Custom Navigation Arrows';
 
  carouselOptions = {
    margin: 25,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        loop: true,
        nav: true
      },
      600: {
        items: 1,
        loop: true,
        nav: true
      },
      1000: {
        items: 1,
        nav: true,
        loop: true
      },
      1500: {
        items: 1,
        nav: true,
        loop: true
      }
    }
  }
 
  images = [
    {
      text: "Everfresh Flowers",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/1.jpg"
    },
    {
      text: "Festive Deer",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/2.jpg"
    },
    {
      text: "Morning Greens",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/3.jpg"
    },
    {
      text: "Bunch of Love",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/4.jpg"
    },
    {
      text: "Blue Clear",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/5.jpg"
    },
    {
      text: "Evening Clouds",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/7.jpg"
    },
    {
      text: "Fontains in Shadows",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/8.jpg"
    },
    {
      text: "Kites in the Sky",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/9.jpg"
    },
    {
      text: "Sun Streak",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/10.jpg"
    }
  ]

  changeRouteFavoritos = () =>{
    this.route.navigateByUrl("menu/carrosFavoritos")
  }
  
  logout = () =>{
    this._authService.logout()
    this.route.navigateByUrl("/autenticacao/login")
  }

}
