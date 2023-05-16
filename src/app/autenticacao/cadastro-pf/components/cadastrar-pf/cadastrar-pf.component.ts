import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CadastroPfModel } from '../../models/cadastro-pf.model';
import { CpfValidator } from 'src/app/shared/validators/cpf.validator';
import { CnpjValidator } from 'src/app/shared/validators/cnpj.validator';
import { catchError, tap } from 'rxjs';
import { of } from 'rxjs';
import { CadastroPfService } from '../../services/cadastro-pf.service';

@Component({
  selector: 'app-cadastrar-pf',
  templateUrl: './cadastrar-pf.component.html',
  styleUrls: ['./cadastrar-pf.component.css'],
})
export class CadastrarPfComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private cadastroPfService: CadastroPfService
  ) {}

  ngOnInit() {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      cpf: ['', [Validators.required, CpfValidator]],
      cnpj: ['', [Validators.required, CnpjValidator]]
    });
  }

  cadastrarPf() {
    if (this.form.invalid) {
      return;
    }

    const cadastroPf: CadastroPfModel = this.form.value;
    this.cadastroPfService.cadastrar(cadastroPf)
    .pipe(
      tap(data => {
        const msg: string = "Realize o login para acessar o sistema.";
        this.snackbar.open(msg, "Sucesso", {duration: 5000});
        this.router.navigate(['/login']);

      }),

      catchError(err => {
        let msg = "Tente novamente em instantes.";
        if (err.status === 400){
          msg = err.error.errors.join(' ');
        }
        this.snackbar.open(msg, "Error", {duration: 5000});

        return of (null);
      })
    )

    .subscribe();

    return false;

  }

  
}
