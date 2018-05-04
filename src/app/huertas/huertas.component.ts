import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-huertas',
  templateUrl: './huertas.component.html',
  styleUrls: ['./huertas.component.css']
})
export class HuertasComponent implements OnInit {

  rutaObservable: Observable<any[]>;
  // selectedRuta: Insertar;
   constructor(  private router: Router, private db: AngularFireDatabase, private cookieService: CookieService) { }
 
   ngOnInit() {
   this.rutaObservable = this.getRutas('/rutas');
 }
   
 getRutas(listPath): Observable<any[]> {
   return this.db.list(listPath).valueChanges();
 }

 prueba: any;

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

 };


 

}



