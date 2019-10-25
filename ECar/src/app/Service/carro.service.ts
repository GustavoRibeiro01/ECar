import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';

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

  getCarrosUsuario = (): Promise<any>  =>{

    return new Promise((resolve, reject) => {

          this.axios.get(`${this.pathAPI}Carro/GetCarrosUsuario`)
              .then((response) => resolve(response.data))
              .catch((error) => reject(error));
      });
  }
}
