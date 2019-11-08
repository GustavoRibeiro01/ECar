import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';
import { Usuario } from '../Classes/usuario';
import { Carro } from '../Classes/carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  public Carros: Carro[]
  private pathAPI: string = "http://localhost:58224/api/"
  private axios = require('axios');

  constructor() { }

  getCarrosUsuario = (id:number = 0): Promise<any>  =>{

    return new Promise((resolve, reject) => {

          this.axios.post(`${this.pathAPI}Carro/GetCarrosUsuario`, {Id: id})
              .then((response) =>{
                this.Carros = (response.data as Carro[])
                resolve(response.data)
              } )
              .catch((error) => reject(error));
      });
  }

  getCurrentCars = (): Carro[] =>{
    return this.Carros
  }

  updateCurrentCars = (listCars: any[]) =>{
    this.Carros = listCars
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
