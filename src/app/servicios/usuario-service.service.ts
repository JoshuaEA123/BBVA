import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  usuario:any ;

  URL:string = "http://192.168.43.168:8080/api/login";

  constructor(private http: HttpClient) { 
    console.log("Servicio de Usuarios listo para usarse");
  }


  Login(usuario: any){
  
    return this.http.post(this.URL, usuario).pipe(map (data => {data as Usuario; this.usuario = data;}));
  }
  


}

export class Usuario {
  
  id :string;
 name: string;
 lastname: string;
 email:string;
 password: string;  
 dni: string;
} 