import { Component, OnInit } from '@angular/core';
import { PagosService } from '../servicios/pagos.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  Pagos:any[];

  constructor( private PagosService : PagosService) {


    this.Pagos = PagosService.Pagos;
   }

  ngOnInit() {
  }

  obtenerPago(cantidad:number){

    console.log(console.log(cantidad));

  }

}
