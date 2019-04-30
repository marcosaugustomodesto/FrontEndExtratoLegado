import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Movimento } from "./movimento";

const API = 'http://localhost:8083';

const httpOptions = {
    headers: new HttpHeaders({ 
        
    }
)};


@Injectable({ providedIn: 'root' })
export class MovimentoService {

    private movimentos: Movimento[];

    constructor(private http: HttpClient) {}
    
    listAll() {         
        this.http.get<Movimento[]>(API + '/extrato/all', httpOptions)
        .subscribe(mov => { 
            this.movimentos = mov;
             console.log("movimento importados:" + mov);   
             return this.movimentos;
           });;        
    }


}