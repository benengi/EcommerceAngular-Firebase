import { Component } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { ContactoService } from './contacto/contacto.services';
import { AuthService } from './auth-service-guard/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){}

  ngOnInit(){} 

}
