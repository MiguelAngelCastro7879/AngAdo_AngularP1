import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Respuesta1, Respuesta0 } from './Models/usuarios.response';



@Injectable({
  providedIn: 'root'
})
export class PeticionService {
  public usuarios: any = []
  constructor(private http: HttpClient) {
    console.log('Servicio funcionando');
  }
  urlBase = 'http://127.0.0.1:3333/usuario'
  getAll(){
    return this.http.get<Respuesta0>(this.urlBase)
  }
  getOne(indice:any){
    return this.http.get<Respuesta1>(this.urlBase+'/'+indice)
  }
}
