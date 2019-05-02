import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MovimentoService } from '../movimento/movimento.service';
import { Movimento } from '../movimento/movimento';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MovimentoListResolver implements Resolve<Observable<Movimento[]>>{
    constructor(private service:MovimentoService){}

    resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Observable<Movimento[]> | Observable<Observable<Movimento[]>> | Promise<Observable<Movimento[]>> {
        return this.service.listAll();
    }

}