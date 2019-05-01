import { Component, OnInit } from '@angular/core';
import { MovimentoService } from '../movimento/movimento.service';
import { Movimento } from '../movimento/movimento';


@Component({
  selector: 'app-movimento-list',
  templateUrl: './movimento-list.component.html',
  styleUrls: ['./movimento-list.component.css']
})
export class MovimentoListComponent implements OnInit {

  private movimentos:Movimento[];
  

  constructor(
    private movimentoService: MovimentoService
  ) { }


  ngOnInit() {
    this.movimentoService.listAll()
     .subscribe(mov => this.movimentos = mov, err => console.log(err));    
  }

  

}


