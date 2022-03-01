import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  baseurl = 'http://localhost:8000';
  urlApi = '/roi_et_swine/auth/login';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
      'Access-Control-Allow-Headers': 'Authorization, Lang',
      'Access-Control-Allow-Credentials': 'true'
    })
  };

  constructor(private httpClient: HttpClient) { }

  auth(Username: any, password: any): Observable<any> {
    const url = `${this.baseurl + this.urlApi}/${Username}/${password}`;
    return this.httpClient.get<any>(url, { headers: this.httpOptions.headers })
      .pipe(retry(1), catchError(this.errorHandl));
  }
  /**
   * @param userProfile
  */


  setSso(userProfile: any) {
    sessionStorage.setItem(environment.sessionStorageName, JSON.stringify(userProfile));
  }

  getSso() {
    const currentUser = sessionStorage.getItem(environment.sessionStorageName);
    return JSON.parse(currentUser);
  }

  /**
     * @param roleType
    */

  setSsoRoleType(roleType: any) {
    sessionStorage.setItem(environment.sessionRoleType, JSON.stringify(roleType));
  }

  getSsoRoleType() {
    const userRoleType = sessionStorage.getItem(environment.sessionRoleType);
    return JSON.parse(userRoleType);
  }

  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
