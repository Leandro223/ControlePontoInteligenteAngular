import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./components/admin.component";
import { ListagemComponent } from "./components/listagem/listagem.component";
import { CadastroComponent } from "./components/cadastro/cadastro.component";
import { AtualizacaoComponent } from "./components/atualizacao/atualizacao.component";


export const AdminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,

        children: [
            {
                path: '',
                component: ListagemComponent
            },

            {
                path: 'cadastro',
                component: CadastroComponent
            },

            {
                path: 'atualizacao/:lancamentoId',
                component: AtualizacaoComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(AdminRoutes)
    ],

    exports: [
        RouterModule
    ]
})

export class AdminRoutingModule {

}