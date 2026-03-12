import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Consult } from './consult/consult';

export const routes: Routes = [
    { path: 'register', component: Register },
    { path: 'consult', component: Consult }
];
