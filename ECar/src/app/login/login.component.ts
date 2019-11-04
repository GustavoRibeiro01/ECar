import { Component, OnInit, Input } from '@angular/core';
import { MzButtonModule } from 'ngx-materialize'
import { Usuario } from '../Classes/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new Usuario('','','','')

  constructor() { }

  ngOnInit() {
  }

  VerificarAcesso = () =>{
    console.log(this.user)
  }
}
