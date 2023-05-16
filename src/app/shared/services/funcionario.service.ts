import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/app/environments/environment';
import { HttpUtilService } from './http-util.service';
import { Lancamento } from '../models/lancamento.model';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private readonly PATH: string = 'funcionarios';

  private readonly PATH_FUNC_POR_EMPRESA = '/empresa/{empresaId}';

  constructor(private http: HttpClient, private HttpUtilService: HttpUtilService) { }


  listarFuncionariosEmpresa(): Observable<any> {
    return this.http.get(env.baseApiUrl + this.PATH + this.PATH_FUNC_POR_EMPRESA.replace('{empresaId}', this.HttpUtilService.obterIdEmpresa()),
      this.HttpUtilService.headers());
  }
}
