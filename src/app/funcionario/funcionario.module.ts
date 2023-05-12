import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentoComponent } from './components/lancamento/lancamento.component';
import { ListagemComponent } from './components/listagem/listagem.component';
import { FuncionarioComponent } from './components/funcionario.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LancamentoComponent,
    ListagemComponent,
    FuncionarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FuncionarioModule { }
