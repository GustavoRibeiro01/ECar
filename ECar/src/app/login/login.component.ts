import { Component, OnInit, Input } from '@angular/core';
import { MzButtonModule } from 'ngx-materialize'
import { Usuario } from '../Classes/usuario';
import { AutenticacaoService } from '../Service/autenticacao.service';
import { Router } from '@angular/router';
import { MzToastModule, MzToastService } from 'ngx-materialize';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new Usuario('','','','')

  constructor(
    private _authService: AutenticacaoService,
    private route: Router,
    private toast: MzToastService
  ) { }

  ngOnInit() {
  }

  VerificarAcesso = () =>{
    this._authService.login(this.user)
      .then(
        response =>{

          if(response != null)
          {
            if((response as Usuario).Administrador)
            {
              this.route.navigateByUrl("/home/adm")
              this.showToast(`Bem Vindo ${(response).Nome}!`)
            }
            else
            {
              this.route.navigateByUrl("/home")
              this.showToast(`Bem Vindo ${(response).Nome}!`)
            }
            
          }
          else{
            this.showToast("Login e senha incompativeis")
          }
        }
      )
      .catch(
        erro =>{
          this.showToast("Não foi possiel comunicar com API")
          console.log(erro)
        }
      )
  }

  showToast(text: string){

    this.toast.show(text, 4000, 'black')

  }
}
