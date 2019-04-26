import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Movimento } from "./movimento";
import { Observable } from 'rxjs';

const API = 'http://localhost:8083';

const httpOptions = {
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json', 
        'Accept': 'application/json', 
        'Authorization': localStorage.getItem('accessToken')}
)};



@Injectable({ providedIn: 'root' })
export class MovimentoService {

    constructor(private http: HttpClient) {}
    
    listAll() { 
        return this.http.get<Movimento[]>(API + '/extrato/all', httpOptions);
    }
}