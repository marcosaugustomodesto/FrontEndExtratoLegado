import { Component, OnInit } from '@angular/core';
import { MovimentoService } from '../movimento/movimento.service';

@Component({
  selector: 'app-movimento-list',
  templateUrl: './movimento-list.component.html',
  styleUrls: ['./movimento-list.component.css']
})
export class MovimentoListComponent implements OnInit {

  movimentos: any[] = [];
  
  movimentos_: any[]= [];  
  

  constructor(
    private movimentoService: MovimentoService
  ) { }


  ngOnInit() {
    
    this.movimentoService.listAll()
      .subscribe(movimentos => this.movimentos = movimentos);

  }

  

}


