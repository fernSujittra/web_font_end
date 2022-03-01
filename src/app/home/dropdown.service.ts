import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  inputForm: FormGroup;
  baseurl = 'http://localhost:8000';
  urlApi = '/stockmoto/ddl';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
      'Access-Control-Allow-Headers': 'Authorization, Lang',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) { }


  getBrandList(): Observable<any> {
    return this.httpClient.get<any>(this.baseurl + this.urlApi + '/brand', { headers: this.httpOptions.headers })
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  getGenerateList(code: any): Observable<any> {
    const url = `${this.baseurl + this.urlApi + '/gen'}/${code}`;
    return this.httpClient.get<any>(url, { headers: this.httpOptions.headers })
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
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
