import { Component, OnInit, OnChanges } from '@angular/core';
import { MovimentoService } from '../movimento/movimento.service';
import { Movimento } from '../movimento/movimento';
import { Input } from '@angular/core';

@Component({
  selector: 'app-movimento-list',
  templateUrl: './movimento-list.component.html',
  styleUrls: ['./movimento-list.component.css']
})
export class MovimentoListComponent implements OnInit, OnChanges {
  
  @Input() movimentos:Movimento[] = [];
  @Input() filter: string = '';


  constructor(
    private movimentoService: MovimentoService
  ) { }
  ngOnInit() {
    this.movimentoService.listAll()
     .subscribe(mov => this.movimentos = mov, err => console.log(err));    
  }

  ngChanges() {
    this.movimentoService.listAll()
     .subscribe(mov => this.movimentos = mov, err => console.log(err));    
  }


}


