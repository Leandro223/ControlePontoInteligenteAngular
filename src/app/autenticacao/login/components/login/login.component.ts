import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Login } from '../../models/login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, 
              private router: Router, private snackBar: MatSnackBar
              ){}
  
  
  ngOnInit(){
    this.gerarForm();
    
  }

  gerarForm(){
    this.form = this.fb.group({
      email: [''],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  logar(){
    if(this.form.invalid){
      return;
    }

    const login: Login = this.form.value;

  }

}
