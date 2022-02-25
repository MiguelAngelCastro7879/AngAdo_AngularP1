import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PeticionService {
  constructor(private http: HttpClient) {
    console.log('Servicio funcionando');
  }
  url = 'http://127.0.0.1:3333/peticion'
  mandarPeticion(){
    return this.http.get(this.url,{responseType: 'text'});
  }
}
