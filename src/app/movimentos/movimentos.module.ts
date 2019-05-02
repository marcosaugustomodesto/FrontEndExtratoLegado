import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MovimentoListComponent } from './movimento-list/movimento-list.component';
import { MovimentoComponent } from './movimento/movimento.component';
import { FilterByDescription } from './filter-by-description.pipe';

@NgModule({
  declarations: [MovimentoListComponent, MovimentoComponent, FilterByDescription],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class MovimentosModule { }
