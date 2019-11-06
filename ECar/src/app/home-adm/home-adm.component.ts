import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarroService } from '../Service/carro.service';

@Component({
  selector: 'app-home-adm',
  templateUrl: './home-adm.component.html',
  styleUrls: ['./home-adm.component.css']
})
export class HomeAdmComponent implements OnInit {

  ListaCarros: object[]

  constructor(
    private carroService: CarroService,
    private route: Router
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

  removerCarro = (id) =>{
    console.log(id)
  }

}
