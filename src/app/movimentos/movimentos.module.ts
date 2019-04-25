import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MovimentoListComponent } from './movimento-list/movimento-list.component';
import { MovimentoComponent } from './movimento/movimento.component';

@NgModule({
  declarations: [MovimentoListComponent, MovimentoComponent],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class MovimentosModule { }
