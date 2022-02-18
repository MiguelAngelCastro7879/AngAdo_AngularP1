import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PeticionService {
  constructor(private http: HttpClient) {
    console.log('Servicio funcionando');
  }
  url = 'http://192.168.1.9:3333/peticion'
  mandarPeticion(){
    return this.http.get(this.url,{responseType: 'text'});
  }
}
