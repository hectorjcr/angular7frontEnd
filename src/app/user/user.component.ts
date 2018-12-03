import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./model/user";
import {ConfigConnection} from "../config/config-connection";
import {UserServiceService} from "./service/user-service.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  model:User = {
    id:null,
    firstName:'',
    lastName:'',
    emailId:'',
    createdBy:'',
    createdAt:'',
    updatedBy:'',
    updatedAt:''
  };

  usuarios: User[];

  constructor(private http: UserServiceService) {

  }

  ngOnInit() {
    this.getAllUsers();
  }

  sendUser() {
    this.http.sendUser(this.model).subscribe(
      res =>{
        this.getAllUsers();
        this.inicializarModelo()
      },
      err => {
        alert("na nai");
      }
    )
  }

  getAllUsers(){
    this.http.getAllUsers().subscribe(
      res => {
        this.usuarios = res;
      },
      err => {
        alert("na nai cucais");
      }
    );
  }

  delete(user: User){
    if(confirm("Desea borar el registro de: "+user.firstName+" "+user.lastName)){
      this.http.deleteUser(user.id).subscribe(
        res => {
          this.getAllUsers();
          this.inicializarModelo();
          alert("usuario eliminado");
        },
        err => {alert("no se puoo");}
      );
    }
  }

  getUser(user: User) {
    this.http.getUser(user.id).subscribe(
      res => {
        this.model = res;
      },
      err => {alert("na nai cucais");}
    );
  }
  resetForm(user: User){

  }
  inicializarModelo(){
    /*this.model.id=null;
    this.model.firstName='';
    this.model.lastName='';
    this.model.emailId='';
    this.model.createdBy='';
    this.model.createdAt='';
    this.model.updatedBy='';
    this.model.updatedAt='';*/

  }
}
