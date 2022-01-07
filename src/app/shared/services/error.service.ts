import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class ErrorService {
  constructor() {}
  public handleError(error: HttpErrorResponse) {
    const { error: err } = error;
    const { message, status } = err;
    if (err instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${status}, ` + `body was: ${message}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(
      message ? message : 'Something bad happened; please try again later.'
    );
  }
}
