import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentoComponent } from './components/lancamento/lancamento.component';
import { ListagemComponent } from './components/listagem/listagem.component';
import { FuncionarioComponent } from './components/funcionario.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { HttpUtilService } from '../shared/services/http-util.service';
import { LancamentoService } from '../shared/services/lancamento.service';



@NgModule({
  declarations: [
    LancamentoComponent,
    ListagemComponent,
    FuncionarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    SharedModule
  ],
  providers: [
    HttpUtilService,
    LancamentoService
  ]
})
export class FuncionarioModule { }
