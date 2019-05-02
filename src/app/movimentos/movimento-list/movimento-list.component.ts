import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movimento } from '../movimento/movimento';

@Component({
  selector: 'app-movimento-list',
  templateUrl: './movimento-list.component.html',
  styleUrls: ['./movimento-list.component.css']
})
export class MovimentoListComponent implements OnInit {
  
  movimentos: Movimento[] = [];
  filter: string = ''; 
  
  constructor(private activateRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
      this.movimentos = this.activateRoute.snapshot.data.movimentos;
  }

}


