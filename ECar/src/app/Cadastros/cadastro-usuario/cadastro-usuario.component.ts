import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Classes/usuario';
import { AutenticacaoService } from 'src/app/Service/autenticacao.service';
import { Router } from '@angular/router';
import { MzToastModule, MzToastService } from 'ngx-materialize';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  user = new Usuario('','','','')
  constructor(
    private _authService: AutenticacaoService,
    private route: Router,
    private toast: MzToastService
  ) { }

  ngOnInit() {
  }

  CadastrarUsuario = () =>{

    this._authService.cadastrarUsuario(this.user)
      .then(
        response =>{

          if(response != null)
          {
            this.showToast("Salvo")
            this.route.navigateByUrl("/autenticacao/login")
           
          }
          else{
            this.showToast("Não foi possivel realizar o cadastro!")
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

  showToast(text: string){

    this.toast.show(text, 4000, 'black')

  }

}
