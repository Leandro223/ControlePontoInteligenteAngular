import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Tipo } from 'src/app/shared/models/tipo.enum';
import * as moment from 'moment';
import { Lancamento } from 'src/app/shared/models/lancamento.model';

import { HttpUtilService } from 'src/app/shared/services/http-util.service';
import { LancamentoService } from 'src/app/shared/services/lancamento.service';



@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent implements OnInit{
  private dataAtualEng: string;
  dataAtual: string;
  geoLocation: string;
  ultimoTipoLancado: string;

  constructor(private snackbar: MatSnackBar, private router: Router, 
              private HttpUtilService: HttpUtilService, 
              private lancamentoService: LancamentoService){}
  
  
  
  ngOnInit(){
    this.dataAtual = moment().format('DD-MM-YYYY HH:mm:ss');
    this.dataAtualEng = moment().format('YYYY-MM-DD HH:mm:ss');
    this.obterGeolocation();
    this.ultimoTipoLancado='';
    this.obterUltimoLancamento();
    console.log(this.ultimoTipoLancado);
    
  }

  iniciarTrabalho(){
    this.cadastrar(Tipo.INICIO_TRABALHO);
  }

  terminarTrabalho(){
    this.cadastrar(Tipo.TERMINO_TRABALHO);
  }

  iniciarAlmoco(){
    this.cadastrar(Tipo.INICIO_ALMOCO);
  }

  terminarAlmoco(){
    this.cadastrar(Tipo.TERMINO_ALMOCO);
  }

  cadastrar(tipo: Tipo){
    const lancamento: Lancamento = new Lancamento(
      this.dataAtualEng,
      tipo,
      this.geoLocation,
      this.HttpUtilService.obterIdUsuario()

    );

    this.lancamentoService.cadastar(lancamento)
    .subscribe(
      data => {
        const msg: string = "Lançamento realizado com sucesso!";
        this.snackbar.open(msg, "Sucesso!", {duration: 5000});
        this.router.navigate(['/funcionario/listagem']);

    },

    err => {

      let msg: string = "Tente novamente em instantes.";
      if (err.status == 400){
        msg = err.error.errors.join(' ');
      }
      this.snackbar.open(msg, "Erro", {duration: 5000});

    }
    );

}

  obterGeolocation(): string{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => 
        this.geoLocation = `${position.coords.latitude}, ${position.coords.longitude}`);
    }

    return '';
  }

  obterUrlMapa(): string {
    return "https://www.google.com/maps/search/?api=1&query=" + this.geoLocation;
  }


  obterUltimoLancamento(){
    this.lancamentoService.obterUltimoLancamento()
    .subscribe(
      data => {
        this.ultimoTipoLancado = data.data ? data.data.tipo : '';

      },
      err => {
        const msg: string = "Erro obtendo último lançamento";
        this.snackbar.open(msg, "Erro", { duration: 5000 });
      }
    );
  }


  exibirInicioTrabalho(): boolean {
    return this.ultimoTipoLancado == '' || this.ultimoTipoLancado == Tipo.TERMINO_TRABALHO;
  }

  exibirTerminoTrabalho(): boolean{
    return this.ultimoTipoLancado == Tipo.INICIO_TRABALHO || this.ultimoTipoLancado == Tipo.TERMINO_ALMOCO;
  }

  exibirInicioAlmoco(): boolean{
    return this.ultimoTipoLancado == Tipo.INICIO_TRABALHO;
  }

  exibirTerminoAlmoco(): boolean{
    return this.ultimoTipoLancado == Tipo.INICIO_ALMOCO;
  }





}
