import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovimentoListComponent } from './movimentos/movimento-list/movimento-list.component';

import { NotFoundComponent } from './errors/not-found/not-found.component';


const routes: Routes = [
    { path: '', component: MovimentoListComponent },
    { path: '**', component: NotFoundComponent }  
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

