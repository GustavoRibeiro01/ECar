import { Component, OnInit } from '@angular/core';
import { CarroService } from '../Service/carro.service';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../Service/autenticacao.service';
import { Usuario } from '../Classes/usuario';
import { Carro } from '../Classes/carro';
import { UploadImageService } from '../Service/upload-image.service';
import { MzToastModule, MzToastService } from 'ngx-materialize';

@Component({
  selector: 'app-carro-detail',
  templateUrl: './carro-detail.component.html',
  styleUrls: ['./carro-detail.component.css']
})
export class CarroDetailComponent implements OnInit {

  currentUser: Usuario
  currentCar: Carro
  carro: any
  images1: any[] = []
  pathImageApi: string

  constructor(
    private _carroService: CarroService,
    private _authService: AutenticacaoService,
    private _imageService: UploadImageService,
    private route: Router,
    private toast: MzToastService

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

    this.pathImageApi = this._imageService.getPathComplement()
    this.carregarImages()

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
            this.showToast("Reservado!")
          }
          else
          {
            this.showToast("Não foi possivel realizar a reserva!")
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
 
  carregarImages = () =>{

    for (let index = 0; index < this.currentCar.ListaImages.length; index++) {
      
      let img: any = 
      {
        text: this.currentCar.ListaImages[index].ImageCaption,
        image: `${this.pathImageApi}${this.currentCar.ListaImages[index].ImageName}`
      }

      console.log(img)
      this.images1.push(img)
      
    }
  }

  images = [
    
    {
      text: "Everfresh Flowers",
      image: "http://localhost:58224/Image/civic1.jpg"
    },
    {
      text: "Festive Deer",
      image: "http://localhost:58224/Image/civic2.jpg"
    },
    {
      text: "Morning Greens",
      image: "http://localhost:58224/Image/civic3.jpg"
    },
    {
      text: "Bunch of Love",
      image: "http://localhost:58224/Image/civic4.jpg"
    },
    {
      text: "Blue Clear",
      image: "http://localhost:58224/Image/civic5.jpg"
    }
  ]

  changeRouteFavoritos = () =>{
    this.route.navigateByUrl("menu/carrosFavoritos")
  }

  changeRouteReservados = () =>{
    this.route.navigateByUrl("menu/carrosReservados")
  }
  
  logout = () =>{
    this._authService.logout()
    this.route.navigateByUrl("/autenticacao/login")
  }

  showToast(text: string){

    this.toast.show(text, 4000, 'black')

  }

}
