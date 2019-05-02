import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Movimento } from "./movimento";

const API = 'http://10.230.8.112:8083';

const httpOptions = {
    headers: new HttpHeaders({ 
        
    }
)};


@Injectable({ providedIn: 'root' })
export class MovimentoService {

    private movimentos: Movimento[];

    constructor(private http: HttpClient) {}
    
    listAll() {         
        return this.http.get<Movimento[]>(API + '/extrato/all', httpOptions);
    }


}