import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatSort } from '@angular/material/sort';

import { LancamentoService } from 'src/app/shared/services/lancamento.service';
import { Lancamento } from 'src/app/shared/models/lancamento.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  

  dataSource: MatTableDataSource<Lancamento>;
  colunas: string[] = ['data', 'tipo', 'localizacao'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private lancamentoService: LancamentoService, private snackBar: MatSnackBar ){}
  
  ngOnInit(){

    this.lancamentoService.listarTodosLancamentos()
    .subscribe(
      data => {
        const lancamentos = data['data'] as Lancamento[];
        this.dataSource = new MatTableDataSource<Lancamento>(lancamentos);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      },

      err => {
        const msg: string = "Erro obtendo lançamentos.";
        this.snackBar.open(msg, "Error", {duration: 5000});

      }
    );
    
  }

}
