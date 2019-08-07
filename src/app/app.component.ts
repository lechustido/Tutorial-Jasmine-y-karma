import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tutorial-Jasmin-y-Karma';

  public sumatorioNumeros(num1, num2): number {
    return num1 + num2;
  }
}
