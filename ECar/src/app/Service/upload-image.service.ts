import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  private axios = require('axios');
  private pathAPI: string = "http://localhost:58224/api/"
  private pathImage: string = "http://localhost:58224/Image/"

  constructor() { }

  postFile = (caption: string, fileToUpload: File): Promise<any> => {
    
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('ImageCaption', caption);

    return new Promise((resolve, reject) => {
      this.axios.post(`${this.pathAPI}Carro/UploadImage`, formData)
        .then(
          response =>{
            resolve(response)
          }
        )
        .catch(
          erro =>{
            reject(erro)
          }
        )
    });
    
  }

  getPathComplement = ():string => {

    return this.pathImage
    
  }

}
