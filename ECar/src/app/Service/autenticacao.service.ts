import { Injectable } from '@angular/core';
import { Usuario } from '../Classes/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private pathAPI: string = "http://localhost:58224/api/"
  private axios = require('axios');
  private currentUser: Usuario

  constructor() { }

  login = (user: Usuario): Promise<any>  =>{

    return new Promise((resolve, reject) => {

          this.axios.post(`${this.pathAPI}Usuario/Login`, user)
              .then((response) => {
                this.currentUser = (response.data as Usuario)
                resolve(response.data)
                })
              .catch((error) => reject(error));
      });
  }

  logout = () =>{
    this.currentUser = null
  }

  getCurrentUser = (): Usuario =>{
    return this.currentUser
  }

  cadastrarUsuario = (user: Usuario) =>{
    return new Promise((resolve, reject) => {

      this.axios.post(`${this.pathAPI}Usuario/Cadastrar`, user)
          .then((response) => {
            resolve(response.data)
            })
          .catch((error) => reject(error));
    });
  }
}
