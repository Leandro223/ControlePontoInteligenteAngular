import { Component} from '@angular/core';

@Component({
    template: `
    <h2 class="myHeader">Cadastro de Pessoa Física</h2>
    <router-outlet></router-outlet>
    `,
    styles: [ `
        .myHeader{
            text-align: center;

        }
    `]

})

export class CadastroPfComponent{

}