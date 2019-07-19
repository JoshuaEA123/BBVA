import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

    Pagos: any[] = [{
      id : 1,
      descripcion : "Luz",
      direccion : "AV. AKSDNA ",
      telefono : "9816511515",
      cantidad : 350.50,

    },
    {

      id : 2,
      descripcion : "Agua",
      direccion : "AV. AKSDabcNA ",
      telefono : "9816511515",
      cantidad : 370.50,

    },
    {

      id : 3,
      descripcion : "Telefono",
      direccion : "AV. LAS GEMAS ",
      telefono : "980777788",
      cantidad : 170.50,

    },
    {

      id : 5,
      descripcion : "Internet",
      direccion : "AV. LOS RUBIES",
      telefono : "978646899",
      cantidad : 200.00,

    }
  
  
  
  
  ];


  constructor() {
    
    console.log("Servicio  de Pagos listo para usarse");

   }
}

export class Pago {
  
  id:number;
  descripcion :string;
 
 
}
