import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _route: Router) {

  }
  title = 'capacitacion-angular';

  goToProducts() {
    console.log('Go');
    this._route.navigate(['productos']);
  }
}
