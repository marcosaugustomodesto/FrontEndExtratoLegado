import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movimento } from '../movimento/movimento';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MovimentoService } from '../movimento/movimento.service';

@Component({
  selector: 'app-movimento-list',
  templateUrl: './movimento-list.component.html',
  styleUrls: ['./movimento-list.component.css']
})
export class MovimentoListComponent implements OnInit, OnDestroy {
  
  movimentos: Movimento[] = [];
  filter: string = ''; 
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;

  constructor(private activateRoute: ActivatedRoute,
        private movimentoService: MovimentoService) { }
  
  ngOnInit(): void {
    this.movimentos = this.activateRoute.snapshot.data.movimentos;
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  load(){
    this.movimentoService
      .listFromMovimentosPaginated(++this.currentPage)
      .subscribe(movimentos => {
        this.movimentos = this.movimentos.concat(movimentos);
        if(!movimentos.length) this.hasMore = false;

      });
  }

}


