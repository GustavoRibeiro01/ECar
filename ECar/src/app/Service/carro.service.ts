import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';
import { Usuario } from '../Classes/usuario';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  public Carros: object[]
  private pathAPI: string = "http://localhost:58224/api/"
  private axios = require('axios');

  constructor() { }

  getCarros = (): Promise<any>  =>{

    return new Promise((resolve, reject) => {

          this.axios.get(`${this.pathAPI}Carro/Get`)
              .then((response) => resolve(response.data))
              .catch((error) => reject(error));
      });
  }

  getCarrosUsuario = (id:number = 0): Promise<any>  =>{

    return new Promise((resolve, reject) => {

          this.axios.post(`${this.pathAPI}Carro/GetCarrosUsuario`, {Id: id})
              .then((response) => resolve(response.data))
              .catch((error) => reject(error));
      });
  }

  carroFavorito = (obj: any) =>{

    return new Promise((resolve, reject) => {

      this.axios.post(`${this.pathAPI}Carro/CarroFavorito`, obj)
          .then((response) => resolve(response.data))
          .catch((error) => reject(error));
    });
  }

  reservarCarro = (obj: any) =>{
    
    return new Promise((resolve, reject) => {

      this.axios.post(`${this.pathAPI}Carro/ReservarCarro`, obj)
          .then((response) => resolve(response.data))
          .catch((error) => reject(error));
    });
  }

}
