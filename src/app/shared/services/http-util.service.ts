import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {

  constructor() { }

  headers(){
    let httpHeaders = new HttpHeaders();

    if(localStorage['acessToken']){
      httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + localStorage['acessToken']);
    }

    return { headers: httpHeaders };

  }


  obterIdUsuario(){
    if(!localStorage['acessToken']){
      return '';
    }

    const dadosUsuario = this.obterDadosUsuario();
    return dadosUsuario ? dadosUsuario.id : '';
  }

  obterDadosUsuario(){
    if(!localStorage['acessToken']){
      return '';
    }

    return JSON.parse(atob(localStorage['acessToken'].split('.')[1]));

  }
}
