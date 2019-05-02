import { Component, Input, OnInit } from '@angular/core';
import { Movimento } from './movimento';
import { MovimentoService } from './movimento.service';

@Component({
  selector: 'app-movimento',
  templateUrl: './movimento.component.html',
  styleUrls: ['./movimento.component.css']
})
export class MovimentoComponent {

  @Input() dataLancamento: Date = null;
  @Input() descricao = '';
  @Input() numero = 0;
  @Input() situacao = '';
  @Input() dataConferencia: Date = null;
  @Input() dadosBancarios = '';
  @Input() valor = 0;

  @Input() movimentos:Movimento[];
  

}
