import { Component, OnInit } from '@angular/core';
import { UploadImageService } from 'src/app/Service/upload-image.service';
import { Router } from '@angular/router';
import { CarroService } from 'src/app/Service/carro.service';
import { Carro } from 'src/app/Classes/carro';
import { AutenticacaoService } from 'src/app/Service/autenticacao.service';
import { MzToastModule, MzToastService } from 'ngx-materialize';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css'],
  providers:[UploadImageService]
})
export class CadastroProdutoComponent implements OnInit {
  
  imageUrl: string = "/assets/default-image.png";
  fileToUpload: File = null;
  car: Carro

  constructor(
    private carroService: CarroService,
    private imageService : UploadImageService,
    private _authService: AutenticacaoService,
    private route: Router,
    private toast: MzToastService

    ) { 
      this.car = new Carro('','',0)
    }

  ngOnInit() {
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    console.log(this.fileToUpload)

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
      console.log(this.imageUrl)
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(Image){
   this.imageService.postFile(this.car.Id,this.fileToUpload)
    .then(
      response =>{
        
        Image.value = null;
        this.imageUrl = "/assets/default-image.png";
        this.showToast("Enviado")
     }
   )
   .catch(
     erro =>{
       this.showToast("Ocorreu um problema ao enviar")
       console.log('error: ' + erro)
      }
    )
  }

  changeRoute = (car: Carro) =>{
    this.carroService.setCurrentCar(car)
    this.route.navigateByUrl("home/carroDetail")
  }

  changeRouteReservados = () =>{
    this.route.navigateByUrl("menu/carrosReservados")
  }

  changeRouteFavoritos = () =>{
    this.route.navigateByUrl("menu/carrosFavoritos")
  }

  logout = () =>{
    this._authService.logout()
    this.route.navigateByUrl("/autenticacao/login")
  }

  salvarCarro = () =>{
    let car = {
      Id: 0,
      Nome: this.car.Nome,
      Tipo: this.car.Tipo,
      Preco: this.car.Preco
    }

    this.carroService.salvarCarro(car)
      .then(response =>{
        this.car.Id = response as number
        this.showToast("Salvo")
      })
      .catch(erro =>{
        this.showToast('Houve um problema')
      })
  }

  showToast(text: string){

    this.toast.show(text, 4000, 'black')

  }

}
