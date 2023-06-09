import { Component, OnInit, ViewChild, Inject} from '@angular/core';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
import { Observable} from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSelect } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';

import { LancamentoService } from 'src/app/shared/services/lancamento.service';
import { Lancamento } from 'src/app/shared/models/lancamento.model';
import { Tipo } from 'src/app/shared/models/tipo.enum';
import { HttpUtilService } from 'src/app/shared/services/http-util.service';

import { MatDialogRef} from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

import { FuncionarioService } from 'src/app/shared/services/funcionario.service';


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  dataSource: MatTableDataSource<Lancamento>;
  colunas: string[] = ['data', 'tipo', 'localizacao', 'acao'];
  funcionarioId: string;
  totalLancamentos: number;
  
  funcionarios: Funcionario[];
  @ViewChild(MatSelect, { static: true }) matSelect: MatSelect;
  form: FormGroup;

  private pagina: number;
  private ordem: string;
  private direcao: string;

  
  
  
  
  constructor(
    private dialog: MatDialog,
    private lancamentoService: LancamentoService,
    private httpUtil: HttpUtilService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private funcionarioService: FuncionarioService ){}


  ngOnInit(){
    this.pagina = 0;
    this.ordemPadrao();
    this.obterFuncionarios();
    this.gerarForm();

    
  }

  gerarForm(){
    this.form = this.fb.group({
      funcs: ['', []]
    });
  }

  ordemPadrao(){
    this.ordem = 'data';
    this.direcao = 'DESC';
  }

  exibirLancamentos(){
    //this.funcionarioId = '5';
    if (this.matSelect.selected){
      this.funcionarioId = this.matSelect.selected['value'];
    }else if(this.funcId){
      this.funcionarioId = this.funcId;

    }else{
      return;
    }

    sessionStorage['funcionarioId'] = this.funcionarioId;

    this.lancamentoService.listarLancamentoPorFuncionario(
      this.funcionarioId, this.pagina, this.ordem, this.direcao)
      .subscribe(
        data => {
          this.totalLancamentos = data['data'].totalElements;
          const lancamentos = data['data'].content as Lancamento[];
          this.dataSource = new MatTableDataSource<Lancamento>(lancamentos);

        },
        err => {
          const msg: string = "Erro obtendo lancamentos.";
          this.snackBar.open(msg, "Erro", { duration: 5000 });

        }
      );
    
  }
  removerDialog(lancamentoId: string){
    const dialog = this.dialog.open(ConfirmarDialog, {});
    dialog.afterClosed().subscribe( remover => {
      if(remover){
        this.remover(lancamentoId);
      }
    });
  }

  remover(lancamentoId: string) {
    this.lancamentoService.remover(lancamentoId)
    .subscribe(
      data => {
        const msg: string = "Lançamento removido com sucesso!";
        this.snackBar.open(msg, "Sucesso!", {duration: 5000});
        this.exibirLancamentos();
      },
      err => {
        let msg: string = "Tente novamente em instantes";
        if( err.status == 400){
          msg = err.error.errors.join(' ');
        }
        this.snackBar.open(msg, "Error", {duration: 5000});
      }
    )
  }

  paginar(paginaEvent: PageEvent){
    this.pagina = paginaEvent.pageIndex;
    this.exibirLancamentos();
  }

  ordenar(sort: Sort) {
    if(sort.direction == ''){
      this.ordemPadrao();
    }else{
      this.ordem = sort.active;
      this.direcao = sort.direction.toUpperCase();
    }
    this.exibirLancamentos();
  }


  get funcId(): string {
    return sessionStorage['funcionarioId'] || false;
  }

  obterFuncionarios(){

    this.funcionarioService.listarFuncionariosEmpresa()
    .subscribe(
      data => {
        const usuarioId: string = this.httpUtil.obterIdUsuario();
        this.funcionarios = (data.data as Funcionario[])
        .filter(func => func.id != usuarioId);

        if ( this.funcId){
          this.form.get('funcs').setValue(parseInt(this.funcId, 10));
          this.exibirLancamentos();
        }


      },
      err => {

        const msg: string = "Erro obtendo funcionarios."
        this.snackBar.open(msg, "Erro", { duration: 5000 });

      }
    );
  }

}

@Component({
  selector: 'confirmar-dialog',
  template: `
    <h1 mat-dialog-title> Deseja realmente remover o lançamento?></h1>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="false" tabindex="-1">
      Não
      </button>
      <button mat-button [mat-dialog-close]="true" tabindex="2">
      Sim
      </button>
    
    
    </div>
  `,

})

export class ConfirmarDialog{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
