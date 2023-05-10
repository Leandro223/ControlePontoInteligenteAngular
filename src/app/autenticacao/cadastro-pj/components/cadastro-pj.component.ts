import { Component} from '@angular/core';

@Component({
    template: `
    <h2 class="my-heading">Cadastro de Pessoa Jurídica</h2>
    <router-outlet></router-outlet>
    
    `,
    styles: [
        `
        .my-heading {
            text-align: center;
        }
        `
    ]
})



export class CadastroPjComponent{

}