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
  private readonly PATH_LANCAMENTOS = '/funcionario/{funcionarioId}';
  private readonly PATH_TODOS_LANC = '/funcionario/{funcionarioId}/todos';

  constructor(private http: HttpClient, private HttpUtilService: HttpUtilService) { }

  cadastar(lancamento: Lancamento): Observable<any>{
    return this.http.post(env.baseApiUrl + this.PATH, lancamento, this.HttpUtilService.headers());
  }

  obterUltimoLancamento(): Observable<any>{
    return this.http.get(env.baseApiUrl + this.PATH + this.PATH_ULTIMO_LANC.replace('{funcionarioId}', this.HttpUtilService.obterIdUsuario()),
      this.HttpUtilService.headers() 
      
      );
  }

  listarTodosLancamentos(): Observable<any> {
    return this.http.get(env.baseApiUrl + this.PATH + this.PATH_TODOS_LANC.replace('{funcionarioId}', this.HttpUtilService.obterIdUsuario()),
    this.HttpUtilService.headers());
  }

  listarLancamentoPorFuncionario(
    funcionarioId: string,
    pagina: number,
    ordem: string,
    direcao: string): Observable<any>{

      const url: string = env.baseApiUrl + this.PATH + this.PATH_LANCAMENTOS.replace('{funcionarioId}', funcionarioId);

      const params: string = '?pag=' + pagina + '&ord=' + ordem + '&dir=' + direcao;

      return this.http.get(url + params, this.HttpUtilService.headers());

  }

  remover(lancamentoId: string): Observable<any> {
    return this.http.delete(env.baseApiUrl + this.PATH + '/' + lancamentoId, this.HttpUtilService.headers());

  }
}
