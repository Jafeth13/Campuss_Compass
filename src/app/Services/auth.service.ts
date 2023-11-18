import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';


const Endpoint='https://localhost:7018/api/Authentication';
const EndpointAccount='https://localhost:7018/api/'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient){
  }

  login(formData: { username: string, password: string }){

    return this.http.post(Endpoint+'/login',formData,httpOptions).pipe(
      tap((response: any) => {
        console.log(response)   
        localStorage.setItem('name', response.name+ '');
        localStorage.setItem('lastname', response.lastname+ '');   
        localStorage.setItem('idAccount', response.id);  
      })
    );
  }

    add(accountForm:{name:string,lastname:string ,birth:string,email:string,userName:string,password:string,passwordConfirm:string ,role:string}){
     
    //  console.log(Endpoint+'/registration',accountForm,httpOptions)
      return this.http.post(Endpoint+'/registration',accountForm,httpOptions)
    }

    getAccount(id:any){
      return this.http.get(EndpointAccount+'Account/'+id,httpOptions)
    }
       
    }
  