import { Component, Input } from '@angular/core';

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


}
