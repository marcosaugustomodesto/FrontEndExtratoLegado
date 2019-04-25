import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Movimento } from "./movimento";

const API = 'http://localhost:8083';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'cache-control': 'no-cache',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    })
};

@Injectable({ providedIn: 'root' })
export class MovimentoService {

    constructor(private http: HttpClient) {}

    listAll() {
        return this.http.get<Movimento[]>(API + '/extrato/all', httpOptions);       
    }
}
