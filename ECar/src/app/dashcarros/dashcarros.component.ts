import { Component, OnInit } from '@angular/core';
import { CarroService } from '../Service/carro.service';


@Component({
  selector: 'app-dashcarros',
  templateUrl: './dashcarros.component.html',
  styleUrls: ['./dashcarros.component.css']
})
export class DashcarrosComponent implements OnInit {

  ListaCarros: object[]
  constructor(
    private carroService: CarroService
  ) { }

  ngOnInit() {

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

  adicionar = (carro: any) =>{
    carro.CarroFavorito = !carro.CarroFavorito
  }

}
