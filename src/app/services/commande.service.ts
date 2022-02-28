import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyInterface } from '../models/my-interface';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  UrlApi = 'http://localhost:42402/commandes'

  constructor(private http : HttpClient) {
  
   }
   //CRUD
   //Methode get
   getAll(){
     return this.http.get<MyInterface>(this.UrlApi)
   }
   //Methode delete
   delete(id: any){
     return this.http.delete<MyInterface>(`${this.UrlApi}/${id}`);

   }
   postCo(commandes: any){
     return this.http.post<MyInterface>(this.UrlApi, commandes);
   }
   //Update
   updateCommande(commandes: { id: any; }){
    return this.http.put(`${this.UrlApi}/${commandes.id}`, commandes);
   }
}
