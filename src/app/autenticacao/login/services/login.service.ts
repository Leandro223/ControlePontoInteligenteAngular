import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/app/environments/environment';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private readonly PATH: string = 'auth';

  logar(login: Login){
    return this.http.post(env.baseUrl + this.PATH, login );
  }
}
