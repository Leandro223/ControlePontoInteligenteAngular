import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Login } from '../../models/login.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, 
              private router: Router, private snackBar: MatSnackBar,
              private loginService: LoginService
              ){}
  
  
  ngOnInit(){
    this.gerarForm();
    
  }

  gerarForm(){
    this.form = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  logar(){
    if(this.form.invalid){
      return;
    }

    const login: Login = this.form.value;
    this.loginService.logar(login)
    .subscribe({
      next: (data) => {
        localStorage['acessToken'] = data['accessToken'];
          const token = data['accessToken'];
          const decodedPayload = atob(token.split('.')[1]);
          const usuarioData = JSON.parse(decodedPayload);
          const userRoles = usuarioData.role;
          console.log(userRoles);
          if (usuarioData?.role === 'ROLE_ADMIN') {
            this.router.navigate(['/admin']);
            alert('Deve redirecionar para pagina de admin');
          } else {
            this.router.navigate(['/funcionario']);
            alert('Deve redirecionar para pagina de funcionario');
          }
        },
        error: (err) => {
          alert('Email: ' + login.email + ', senha: ' + login.senha);
    
          console.log(JSON.stringify(err));
          let msg: string = 'Tente novamente em instantes.';
          if (err['status'] == 401) {
            msg = 'Email/senha inválido(s).';
          }
          this.snackBar.open(msg, 'Erro', { duration: 5000 });
        },
      });
    }

  
}
