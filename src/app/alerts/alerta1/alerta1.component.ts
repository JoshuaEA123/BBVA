import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alerta1',
  templateUrl: './alerta1.component.html',
  styleUrls: ['./alerta1.component.css']
})
export class Alerta1Component implements OnInit {
  @Input() cerrar:boolean;
  
  hola ="Hola :V";
  @Output() cerrarAlerta: EventEmitter<boolean>;
  constructor() { 
    this.cerrarAlerta = new EventEmitter();
  }

  ngOnInit() {
  }


  Cerrar(){
    this.cerrarAlerta.emit(this.cerrar);
    console.log(this.cerrar);
  }

}
