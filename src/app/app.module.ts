import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './autenticacao/login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginRoutingModule } from './autenticacao/login/login-routing.module';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CadastroPjModule } from './autenticacao/cadastro-pj/cadastro-pj.module';
import { CadastroPjRoutingModule } from './autenticacao/cadastro-pj/cadastro-pj-routing.module';
import { CadastroPfModule } from './autenticacao/cadastro-pf/cadastro-pf.module';
import { CadastroPfRoutingModule } from './autenticacao/cadastro-pf/cadastro-pf-routing.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { FuncionarioRoutingModule } from './funcionario/funcionario-routing.module';
import { AdminModule } from './admin/admin.module';
import { AdminRoutingModule } from './admin/admin-routing.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    LoginRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    CadastroPjModule,
    CadastroPjRoutingModule,
    CadastroPfModule,
    CadastroPfRoutingModule,
    FuncionarioModule,
    FuncionarioRoutingModule,
    AdminModule,
    AdminRoutingModule,

    
    
    

    AppRoutingModule
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
