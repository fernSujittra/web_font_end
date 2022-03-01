import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  inputForm: FormGroup;
  baseurl = 'http://localhost:8000';
  urlApi = '/roi_et_swine/user';

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


  getRoleList(): Observable<any> {
    return this.httpClient.get<any>(this.baseurl + this.urlApi + '/rolelist', { headers: this.httpOptions.headers })
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }


  getUserList(): Observable<any> {
    return this.httpClient.get<any>(this.baseurl + this.urlApi + '/list', { headers: this.httpOptions.headers })
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  addUser(option?: any) {
    return this.httpClient.post<any>(this.baseurl + this.urlApi + '/add', option, { headers: this.httpOptions.headers })
      .pipe(
        catchError(this.errorHandl)
      );
  }

  edit(option?: any) {
    return this.httpClient.patch<any>(this.baseurl + this.urlApi + '/edit', option, { headers: this.httpOptions.headers })
      .pipe(
        catchError(this.errorHandl)
      );
  }

  getUserById(id: any): Observable<any> {
    const url = `${this.baseurl + this.urlApi + '/detail'}/${id}`;
    return this.httpClient.get<any>(url, { headers: this.httpOptions.headers })
      .pipe(retry(1), catchError(this.errorHandl));
  }

  deletedUser(option?: any) {
    return this.httpClient.put<any>(this.baseurl + this.urlApi + '/delete', option, { headers: this.httpOptions.headers })
      .pipe(
        catchError(this.errorHandl)
      );
  }

  buildForm() {
    this.inputForm = this.formBuilder.group({
      'iduser': [''],
      'idrole': [''],
      'username': [''],
      'password': [''],
      'fname': [''],
      'lname': [''],
      'cardId': [''],
      'birthDate': [''],
      'age': [''],
      'sex': [''],
      'phone': [''],
      'career': [''],
      'earnings': [''],
      'investment': [''],
      'receipt': [''],

      'roleName': [''],
      'homeNumber': [''],
      'home': [''],
      'road': [''],
      'alley': [''],
      'tombonName': [''],
      'aumphurName': [''],
      'provinceName': [''],
      'postCode': ['']
    });
    return this.inputForm;
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
