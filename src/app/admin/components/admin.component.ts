import { Component } from "@angular/core";

@Component({
    template: `
        <h2 class="myHeader">Controle de Ponto - Admin</h2>
        <router-outlet></router-outlet>
    `,

    styles: [`
        .myHeader{
            text-align: center;
        }
    
    `]

})

export class AdminComponent {


}