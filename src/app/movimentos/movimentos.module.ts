import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MovimentoListComponent } from './movimento-list/movimento-list.component';
import { MovimentoComponent } from './movimento/movimento.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './movimento-list/load-button/load-button.component';

@NgModule({
  declarations: [MovimentoListComponent, MovimentoComponent, FilterByDescription, LoadButtonComponent],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class MovimentosModule { }
