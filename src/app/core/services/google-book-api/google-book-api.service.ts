import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from '@shared-lib/services';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleBookApiService {
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  searchBooks(search: string): Observable<any> {
    const queryString = search.trim() ? search : 'javascript';
    const encodedURI = encodeURI(
      'https://www.googleapis.com/books/v1/volumes?q=' +
        queryString +
        '&maxResults=12&key=AIzaSyCO3wRYJbI1E9HWdbAgJqDnXXIKW7bEj1w'
    );
    return this.httpClient
      .get(encodedURI)
      .pipe(map((response: any) => response.items))
      .pipe(catchError((error) => this.errorService.handleError(error)));
  }
}
