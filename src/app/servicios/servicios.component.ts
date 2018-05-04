import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Ruta } from '../home/Ruta.model';
import { RutaService } from '../home/ruta.services';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})

export class ServiciosComponent implements OnInit {
 //conseguir mostrar database rutas de firebase
  
 rutaObservable: Observable<any[]>;
  rutas: Ruta[];
  prueba: any;
  
  constructor(private router: Router,private cookieService: CookieService,private http:HttpClient, private db: AngularFireDatabase, private rutaService: RutaService) {
  }
//conseguir mostrar database rutas de firebase
  ngOnInit() {
  
    this.rutaObservable = this.getRutas('/rutas')
  }

  getRutas(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  detalles(ident,titulo,fot,preci, desc) {
    this.prueba = {   
      id: ident.value,
      nombre: titulo.value,
      foto: fot.value,
      precio: preci.value,
      descripcion: desc.value
   };
    this.cookieService.set("actual", JSON.stringify(this.prueba)); 
    this.router.navigate(['/reserva', ident.value])


}
}
