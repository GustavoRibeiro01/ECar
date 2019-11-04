import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Classes/usuario';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  user = new Usuario('','','','')
  constructor() { }

  ngOnInit() {
  }

  CadastrarUsuario = () =>{
    console.log(this.user)
    this.user = new Usuario('','','','')
  }
}
