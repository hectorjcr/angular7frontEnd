import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {//al creara el servicio solo colocar el nombre del modelo el sufijo service es automatico
  private url = 'http://localhost:8080/api/v1/users';

  constructor(private http: HttpClient) {

  }

  // Este método debe ser inyectado y subscrito en el componente
  getAllUsers() : Observable<User[]> { // getAllUser devolvera una observable con un array de usuarios
    return this.http.get<User[]>(this.url);//el metodo get de http es un observable y contiene un array de tipo User
  }

  getUser(id:number): Observable<User> {
    return this.http.get(this.url+'/'+id);
  }

  sendUser(user: User): Observable<any> {
    return this.http.post(this.url,user);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete(this.url+'/'+id);
  }
}
