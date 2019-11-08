import { Component, OnInit, Input } from '@angular/core';
import { MzButtonModule } from 'ngx-materialize'
import { Usuario } from '../Classes/usuario';
import { AutenticacaoService } from '../Service/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new Usuario('','','','')

  constructor(
    private _authService: AutenticacaoService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  VerificarAcesso = () =>{
    this._authService.login(this.user)
      .then(
        response =>{

          if(response != null)
          {
            if(response.Administrador)
            {
              this.route.navigateByUrl("/home/adm")
            }
            else
            {
              this.route.navigateByUrl("/home")
            }
            
          }
          else{
            alert("Login e senha incompativeis")
          }
        }
      )
      .catch(
        erro =>{
          alert("Não foi possiel comunicar com API")
          console.log(erro)
        }
      )
  }
}
