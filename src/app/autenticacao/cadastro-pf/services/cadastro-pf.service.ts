import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/app/environments/environment';
import { CadastroPfModel } from '../models/cadastro-pf.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroPfService {

  private readonly PATH: string = 'cadastrar-pf';

  constructor(private http: HttpClient) { }

  cadastrar(cadastrarPf: CadastroPfModel): Observable<any> {
    return this.http.post(env.baseApiUrl + this.PATH, cadastrarPf);
  }
}
