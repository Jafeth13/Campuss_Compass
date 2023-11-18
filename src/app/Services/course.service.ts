import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';


const Endpoint='https://localhost:7018/api/';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer'
    //authorization:`Bearer${Token}`
  })
};
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient){
  }

  get(){
    return this.http.get(Endpoint+'Course',httpOptions)
  }

  getCourseUses(name:any,lastname:any){
    return this.http.get(Endpoint+'Matricula/matriculados/'+name+'/'+lastname,httpOptions)
  }

  gethistory(){
    return this.http.get(Endpoint+'Course',httpOptions)
  }

  getCourseDisabled(name:any,lastname:any){
    return this.http.get(Endpoint+'Matricula/no-matriculados/'+name+'/'+lastname,httpOptions)
  }

  registration(registration:any){
//console.log('https://localhost:7217/api/Matricula',registration)
    return this.http.post<number>('https://localhost:7018/api/Matricula',registration).pipe(
      tap((response: any) => {
      
      })
    );
  }

}
