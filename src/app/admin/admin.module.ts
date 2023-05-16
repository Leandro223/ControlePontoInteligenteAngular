import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtualizacaoComponent } from './components/atualizacao/atualizacao.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ConfirmarDialog, ListagemComponent } from './components/listagem/listagem.component';
import { AdminComponent } from './components/admin.component';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { PtBrMatPaginatorIntl } from '../shared/pt-br-mat-paginator-intl';
import { HttpUtilService } from '../shared/services/http-util.service';
import { LancamentoService } from '../shared/services/lancamento.service';
import { SharedModule } from '../shared/shared.module';

import { MatDialogModule} from '@angular/material/dialog';
import { FuncionarioService } from '../shared/services/funcionario.service';
import { AdminGuard } from './services/admin-guard.service';




@NgModule({
  declarations: [
    AtualizacaoComponent,
    CadastroComponent,
    ListagemComponent,
    AdminComponent,
    ConfirmarDialog
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule
  ],

  providers: [
    LancamentoService,
    HttpUtilService,
    MatPaginatorIntl,
    FuncionarioService,

    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    { provide: MatPaginatorIntl, useClass: PtBrMatPaginatorIntl},
    AdminGuard
  ],
  entryComponents: [ ConfirmarDialog]
})
export class AdminModule { }
