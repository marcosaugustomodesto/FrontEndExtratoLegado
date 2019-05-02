import { Pipe, PipeTransform } from '@angular/core';
import { Movimento } from './movimento/movimento';

@Pipe({ name: 'filterByDescription'})
export class FilterByDescription implements PipeTransform {

    transform(movimentos: Movimento[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery
            .trim()
            .toLowerCase();

        if(descriptionQuery) {
            return movimentos.filter(movimentos =>
                movimentos.descricao.toLowerCase().includes(descriptionQuery)
            );
        } else {
            return movimentos;
        }
    }
}