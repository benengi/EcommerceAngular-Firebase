import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-lalatina',
  templateUrl: './lalatina.component.html',
  styleUrls: ['./lalatina.component.css']
})
export class LalatinaComponent implements OnInit {

  rutaObservable: Observable<any[]>;

  prueba: any;
  // selectedRuta: Insertar;
   constructor( private router: Router,private cookieService: CookieService, private db: AngularFireDatabase) { }
 
   ngOnInit() {
   this.rutaObservable = this.getRutas('/rutas');
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
