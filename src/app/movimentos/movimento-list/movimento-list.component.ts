import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movimento } from '../movimento/movimento';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-movimento-list',
  templateUrl: './movimento-list.component.html',
  styleUrls: ['./movimento-list.component.css']
})
export class MovimentoListComponent implements OnInit, OnDestroy {
  
  movimentos: Movimento[] = [];
  filter: string = ''; 
  debounce: Subject<string> = new Subject<string>();
  
  constructor(private activateRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.movimentos = this.activateRoute.snapshot.data.movimentos;
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}


