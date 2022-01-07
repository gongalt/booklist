import { BooklistComponent } from './booklist.component';
import { BooklistRoutingModule } from './booklist.routing.module';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [BooklistComponent],
  imports: [
    BooklistRoutingModule,
    CommonModule,
    FormsModule,
    InputTextModule,
    TableModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BooklistModule {}
