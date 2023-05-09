import { Component } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'controle-ponto-inteligente';

  constructor(private router: Router) {}

  sair(){
    this.router.navigate(['/']);
  }
}
