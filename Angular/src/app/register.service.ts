import { Injectable } from '@angular/core';
import { User } from './user';
import{Observable} from 'rxjs';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _http:HttpClient) { }

  public registerUserFromRemote(user :User):Observable<any>{
    return this._http.post<any>("http://localhost:8081/saveUser",user);
  }
  // fetchUserListFromRemote():Observable<any>{
  //   return this._http.get<any>("http://localhost:8081/getStateList")
  // }
}
