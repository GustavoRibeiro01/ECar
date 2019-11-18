import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarroService } from '../Service/carro.service';
import { UploadImageService } from '../Service/upload-image.service';
import { Carro } from '../Classes/carro';
import { MzToastModule, MzToastService } from 'ngx-materialize';

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
    private route: Router,
    private toast: MzToastService
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

  removerCarro = (carro: Carro) =>{

    if(carro.CarroReservado > 0)
    {
      this.showToast("Carro ja esta reservado!")
      return
    }

    this.carroService.deletarCarro(carro.Id)
      .then(response =>{
        this.showToast("Removido")
        this.listarCarros()
      })
      .catch(erro =>{
        this.showToast("Houve um problema na exclusão")
      })
  }

  changeRouteCadastro = () =>{
    this.route.navigateByUrl("home/adm/cadastroCarro")
  }

  changeRouteReservas = () =>{
    this.route.navigateByUrl("menu/carrosReservados")
  }

  showToast(text: string){

    this.toast.show(text, 4000, 'black')

  }

}
