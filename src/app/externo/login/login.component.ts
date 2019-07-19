import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from 'app/servicios/usuario-service.service';
import { Usuario } from '../../servicios/usuario-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading:boolean = false;
  cerrar:boolean=false;
  usuario = {
    dni : "12345678",
    password :"jose"
  }
    
    Vusuario : Usuario;

  constructor(private Uservice : UsuarioServiceService , private router : Router) { 

    

  }

  CerrarAlerta(cerrar:boolean){
    console.log( "cerrar que llega + " +cerrar);
      this.cerrar = !cerrar;
      console.log( "cerrar que llega + " +this.cerrar);

    }

  Ingresar(usuario){

    this.Uservice.Login(usuario).subscribe(res => {

      console.log("entro");
        
      this.Vusuario= this.Uservice.usuario ;



       if(this.Vusuario != null){

        this.loading = true;
        setTimeout( ()=> { this.router.navigate(['/dashboard']);},3000);
        
       }else {

        this.cerrar = true;
       }

      // }else {
      //   console.log("es NULL");
      //   //this.router.navigate(['/registro']);
      // }

    })

  }

  ngOnInit() {
  }

}
