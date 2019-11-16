import { Component, OnInit } from '@angular/core';
import { UploadImageService } from 'src/app/Service/upload-image.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css'],
  providers:[UploadImageService]
})
export class CadastroProdutoComponent implements OnInit {
  
  imageUrl: string = "/assets/default-image.png";
  fileToUpload: File = null;

  constructor(private imageService : UploadImageService) { }

  ngOnInit() {
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
      console.log(this.imageUrl)
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(Caption,Image){
   this.imageService.postFile(Caption.value,this.fileToUpload)
    .then(
      response =>{
        
        Caption.value = null;
        Image.value = null;
        this.imageUrl = "/assets/default-image.png";
     }
   )
   .catch(
     erro =>{
       console.log('error: ' + erro)
      }
    )
  }

}
