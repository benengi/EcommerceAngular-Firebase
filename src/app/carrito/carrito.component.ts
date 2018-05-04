import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  rutaObservable: Observable<any[]>;
  allCookies: any = this.cookieService.getAll();
  prec:number=0;
  total:number =0;
  totaliva:number= 0;
  carrito= []
  
  constructor( private router: Router, private http: HttpClient,private cookieService: CookieService,private db: AngularFireDatabase) { }

  ngOnInit() {
    
 
    for (const key in this.allCookies) {
      this.carrito.push(JSON.parse(this.cookieService.get(key)));
      this.prec=parseFloat(JSON.parse(this.cookieService.get(key)).precio)*parseFloat(JSON.parse(this.cookieService.get(key)).cantidad)
      this.total=this.total+this.prec;
      this.totaliva =this.total*0.21 + this.total;
    }
    console.log(this.carrito);
    
  }
  
  getRutas(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

borrarviaje(id){
  this.cookieService.delete(id);
  window.location.reload(true);
}

vaciarcarrito(){
  this.cookieService.deleteAll(this.allCookies);
  window.location.reload(true);
}


  // print(): void {
  //   let printContents, popupWin;
  //   printContents = document.getElementById('print-section').innerHTML;
  //   popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
  //   popupWin.document.open();
  //   popupWin.document.write(`
  //     <html>
  //       <head>
  //         <title>Print tab</title>
  //         <style>
         
  //         </style>
  //       </head>
  //       <body onload="window.print();window.close()">
  //         <h2>Detalles del producto</h2>
  //         ${printContents}
  //       </body>
  //     </html>`
  //   );
  //   popupWin.document.close();
  // }


}
