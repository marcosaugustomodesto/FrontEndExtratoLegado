import { Component, OnInit } from '@angular/core';
import { MovimentoService } from '../movimento/movimento.service';
import { Movimento } from '../movimento/movimento';


@Component({
  selector: 'app-movimento-list',
  templateUrl: './movimento-list.component.html',
  styleUrls: ['./movimento-list.component.css']
})
export class MovimentoListComponent implements OnInit {

  private movimentos;
  

  constructor(
    private movimentoService: MovimentoService
  ) { }


  ngOnInit() {
    this.movimentos = this.movimentoService.listAll()
  }

  

}


