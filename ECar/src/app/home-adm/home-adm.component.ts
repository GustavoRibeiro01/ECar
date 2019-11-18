import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarroService } from '../Service/carro.service';
import { UploadImageService } from '../Service/upload-image.service';

@Component({
  selector: 'app-home-adm',
  templateUrl: './home-adm.component.html',
  styleUrls: ['./home-adm.component.css']
})
export class HomeAdmComponent implements OnInit {

  ListaCarros: object[]
  complementPath: string

  constructor(
    private carroService: CarroService,
    private _ImageService: UploadImageService,
    private route: Router
  ) { }

  ngOnInit() {
    this.complementPath = this._ImageService.getPathComplement()
    this.listarCarros()
  }

  listarCarros = () =>{

    this.carroService.getCarrosUsuario().then(response => {

      this.ListaCarros = response
      console.log(this.ListaCarros)

    }).catch(erro =>{

      console.log(erro)

    })
  }

  removerCarro = (id) =>{
    console.log(id)
  }

  changeRouteCadastro = () =>{
    this.route.navigateByUrl("home/adm/cadastroCarro")
  }

  changeRouteReservas = () =>{
    this.route.navigateByUrl("menu/carrosReservados")
  }

  

}
