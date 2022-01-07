import { Component, OnInit } from '@angular/core';
import { GoogleBookApiService } from '@core/services';
import { SortEvent } from 'primeng/api';
import { orderBy } from 'lodash';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss'],
})
export class BooklistComponent implements OnInit {
  books: any;
  public search: string = '';

  constructor(protected googleBooksApiService: GoogleBookApiService) {}

  ngOnInit(): void {
    this.googleBooksApiService.searchBooks('javascript').subscribe((data) => {
      this.books = data;
    });
  }

  onSearch() {
    this.googleBooksApiService.searchBooks(this.search).subscribe((data) => {
      this.books = data;
    });
  }

  onSort(event: SortEvent) {
    const sortedData = orderBy(event.data, ['volumeInfo.authors'], ['asc']);
    this.books = sortedData;
  }
}
