import { Component } from "@angular/core";

@Component({
    template: `
    <h2 class="my-header">Controle de Ponto</h2>
    <router-outlet></router-outlet>
    `,
    styles: [`
        .my-header{
            text-align: center;
        }
    
    `]

})

export class FuncionarioComponent{

}