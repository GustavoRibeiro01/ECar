import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Classes/usuario';
import { AutenticacaoService } from 'src/app/Service/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  user = new Usuario('','','','')
  constructor(
    private _authService: AutenticacaoService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  CadastrarUsuario = () =>{

    this._authService.cadastrarUsuario(this.user)
      .then(
        response =>{

          if(response != null)
          {
            this.route.navigateByUrl("/autenticacao/login")
          }
          else{
            alert("Não foi possivel realizar o cadastro!")
          }
        }
      )
      .catch(
        erro =>{
          alert("Não foi possivel realizar o cadastro!")
          console.log(erro)
        }
        
      )
    this.user = new Usuario('','','','')
  }

}
