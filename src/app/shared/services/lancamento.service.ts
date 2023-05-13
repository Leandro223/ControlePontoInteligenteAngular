import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/app/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Lancamento } from '../models/lancamento.model';
import { HttpUtilService } from './http-util.service';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  private readonly PATH: string = 'lancamentos';

  private readonly PATH_ULTIMO_LANC = '/funcionario/{funcionarioId}/ultimo';

  constructor(private http: HttpClient, private HttpUtilService: HttpUtilService) { }

  cadastar(lancamento: Lancamento): Observable<any>{
    return this.http.post(env.baseApiUrl + this.PATH, lancamento, this.HttpUtilService.headers());
  }

  obterUltimoLancamento(): Observable<any>{
    return this.http.get(env.baseApiUrl + this.PATH + this.PATH_ULTIMO_LANC.replace('{funcionarioId}', this.HttpUtilService.obterIdUsuario()),
      this.HttpUtilService.headers() 
      
      );
  }
}
